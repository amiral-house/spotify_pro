export const environment = {
  production: true,
  clientId: process.env.SPT_CLIENT_ID,
  clientSecret: process.env.SPT_CLIENT_SECRET,
  localPseudoServer: "http://localhost:7142",
};

// export const SPT_CLIENT_ID = import.meta.env.VITE_SPT_CLIENT_ID;
// export const SPT_CLIENT_SECRET = import.meta.env.VITE_SPT_CLIENT_ID;
// export const LOCAL_PSEUDO_SERVER = "http://localhost:7142";
// export const AUTH_URL = `https://accounts.spotify.com/ru/authorize?response_type=code&redirect_uri=${LOCAL_PSEUDO_SERVER}&client_id=${SPT_CLIENT_ID}&state=q7wjvc`;
