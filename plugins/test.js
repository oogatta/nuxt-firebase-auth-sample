async function hoge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0)
  });
}

export default async ({ app }, inject) => {
  console.log('plugin');

  await hoge();

  console.log('plugin wait');

  return true;
}
