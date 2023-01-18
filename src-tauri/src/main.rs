#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod patch_window;

use patch_window::{macos::ToolbarThickness, PatchWindow};

use tauri::{AppHandle, Manager, WindowBuilder, WindowUrl};
use url::Url;
use window_vibrancy::{apply_acrylic, apply_vibrancy, NSVisualEffectMaterial, NSVisualEffectState};

#[tauri::command]
fn create_auth_window(app: AppHandle, uri: String) {
    let handle = app.app_handle();
    let win = WindowBuilder::new(
        &app,
        "oauth_window",
        WindowUrl::External(Url::parse(uri.as_str()).unwrap()),
    )
    .on_navigation(move |url| {
        handle.emit_all("change_navigation_url", url.to_string());

        return true;
    })
    .build()
    .unwrap();
    win.set_title("Spotify signin");
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let app = app.handle();

            app.windows().iter().for_each(|(_, window)| {
                #[cfg(target_os = "windows")]
                window.set_decorations(true).unwrap();

                #[cfg(target_os = "macos")]
                {
                    window.apply_toolbar(ToolbarThickness::Medium);
                    // window.apply_fix_blur();
                    apply_vibrancy(
                        &window,
                        NSVisualEffectMaterial::HudWindow,
                        Some(NSVisualEffectState::Active),
                        None,
                    )
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
                }
            });

            #[cfg(target_os = "windows")]
            apply_acrylic(&window, Some((18, 18, 18, 125)))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![create_auth_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
