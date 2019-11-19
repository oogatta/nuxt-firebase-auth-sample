async function hoge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0)
  });
}

export default async (context) => {
  console.log('middleware');

  await hoge();

  console.log('middleware wait');

  return true;
}
