function getImageURL(name) {
    return new URL(`../assets/milestone/${name}`, import.meta.url).href
  }
  
  export {getImageURL};