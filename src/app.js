import Error404 from "./views/pages/Error404.js";
import Home from "./views/pages/Home.js";


import Utils from './services/Utils.js'

const routes = {
  "/": Home,
  "/about": Home,
  "/contact": Home,
};


// The router 
const router = async () => {


  // Get the parsed URl from the addressbar
  let request = Utils.getURL();
  
  // App contener
  const appContent = document.getElementById("app");
  appContent.innerHTML = "";

  // Parse the URL 
  let parsedURL = `${request.resource ? "/" + request.resource : "/"}`;

  // checking if route is supported and add to the dom the correct component
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  appContent.innerHTML = await page.render();
  await page.events();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);