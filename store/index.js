const FIREBASE_PROJECT_ID = "oogattanuxtfirebaseauthsample";
const GOOGLE_PUBLIC_KEYS_URL = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

export const state = () => ({
  counter: 0
});

export const mutations = {
  increment (state) {
    state.counter++
  }
};

export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {
    const cookies = app.cookie.parse(req && req.headers && req.headers.cookie || '');
    const firebaseIdToken = cookies["firebase_id_token"];

    async function getPublicKeys({ kid }, callback) {
      try {
        const data = await app.download(GOOGLE_PUBLIC_KEYS_URL);
        const publicKey = JSON.parse(data.toString())[kid];
        callback(null, publicKey);
      } catch (error) {
        callback(error, null);
      }
    }

    if (firebaseIdToken) {
      return new Promise(((resolve, reject) => {
        const options = {
          algorithms: ["RS256"]
        };
        app.jwt.verify(firebaseIdToken, getPublicKeys, options, function (error, decoded) {
          if (error) {
            return reject();
          }

          if (
            decoded.aud === FIREBASE_PROJECT_ID
          ) {
            resolve();
          } else {
            reject();
          }
        });
      }));
    }

    return Promise.resolve();
  }
};
