#![cfg(target_os = "macos")]

use cocoa::{
    appkit::{NSToolbar, NSWindow, NSWindowStyleMask, NSWindowTitleVisibility},
    base::{id, YES},
};
use objc::{class, msg_send, sel, sel_impl};
use tauri::Window;

#[allow(dead_code)]
pub enum ToolbarThickness {
    Thick, // always movable because use hidden title
    Medium,
    Thin,
}

#[allow(deprecated)]
pub fn apply_toolbar(tauri_win: &Window, thickness: ToolbarThickness) {
    let window = tauri_win.ns_window().unwrap() as id;
    unsafe {
        let masks = window.styleMask()
            | NSWindowStyleMask::NSUnifiedTitleAndToolbarWindowMask
            | NSWindowStyleMask::NSFullSizeContentViewWindowMask
            | NSWindowStyleMask::NSBorderlessWindowMask;

        window.setStyleMask_(masks);
        window.setTitlebarAppearsTransparent_(YES);
        window.setTitleVisibility_(NSWindowTitleVisibility::NSWindowTitleHidden);

        match thickness {
            ToolbarThickness::Thick => {
                tauri_win.set_title("").expect("Title wasn't set to ''");
                window.setTitleVisibility_(NSWindowTitleVisibility::NSWindowTitleVisible);
                make_toolbar(window);
            }
            ToolbarThickness::Medium => {
                make_toolbar(window);
            }
            ToolbarThickness::Thin => {}
        }
    }
}

#[cfg(target_os = "macos")]
unsafe fn make_toolbar(id: cocoa::base::id) {
    let new_toolbar = NSToolbar::alloc(id);
    new_toolbar.init_();
    id.setToolbar_(new_toolbar);
}

#[allow(deprecated)]
pub fn apply_fix_blur(window: id) {
    unsafe {}
}

#[allow(dead_code)]
#[repr(u64)]
#[derive(Clone, Copy, Debug, PartialEq)]
enum NSVisualEffectState {
    FollowsWindowActiveState = 0,
    Active = 1,
    Inactive = 2,
}

#[allow(non_snake_case)]
trait NSVisualEffectView: Sized {
    unsafe fn alloc(_: Self) -> id {
        msg_send![class!(NSVisualEffectView), alloc]
    }

    unsafe fn setState_(self, state: NSVisualEffectState);
}

#[allow(non_snake_case)]
impl NSVisualEffectView for id {
    unsafe fn setState_(self, state: NSVisualEffectState) {
        msg_send![self, setState: state]
    }
}
