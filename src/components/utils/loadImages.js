const loadImages = (urls) => {
  const promises = urls.map(
    (url) =>
      new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", reject);

        img.src = url;
      })
  );
  return Promise.all(promises).then((imgs) => imgs);
};

export default loadImages;
