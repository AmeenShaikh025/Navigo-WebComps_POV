import Navigo from "navigo";
// import {} from "jquery";

import "./store-finder.js";
import "./coupon.js";
import "./ext-iframe.js";

import "./style.css";

const router = new Navigo("/");

router.on("/", function (match) {
  document.querySelector("#app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("/coupon", function (match) {
  let couponElement =  document.querySelector('coupon-app');
  let storeElement =  document.querySelector('store-finder');

  let iFrame =  document.querySelector('ext-iframe');

  // if the coupon web comp doesn't exist create one
  if(!couponElement) {
    document.querySelector("#app").insertAdjacentHTML( 'afterbegin', '<coupon-app></coupon-app>' );
  }

  // hide store finder and show coupon component
  if(storeElement) {
    storeElement.style.display = "none";
  }
  if(couponElement) {
    couponElement.style.display = "block";
  }
  if(iFrame) {
    iFrame.style.display = "none";
  }
});

router.on("/store-finder", function (match) {
  let couponElement =  document.querySelector('coupon-app');
  let storeElement =  document.querySelector('store-finder');

  let iFrame =  document.querySelector('ext-iframe');

  // if the store finder web comp doesn't exist create one
  if(!storeElement) {
    document.querySelector("#app").insertAdjacentHTML( 'afterbegin', '<store-finder></store-finder>' );
  }

  // hide coupon and show store finder component
  if(couponElement) {
    couponElement.style.display = "none";
  }
  if(storeElement) {
    storeElement.style.display = "block";
  }
  if(iFrame) {
    iFrame.style.display = "none";
  }
});


router.on("/ext-iframe", function (match) {
  let couponElement =  document.querySelector('coupon-app');
  let storeElement =  document.querySelector('store-finder');

  let iFrame =  document.querySelector('ext-iframe');

  if(!iFrame) {
    document.querySelector("#app").insertAdjacentHTML( 'afterbegin', '<ext-iframe></ext-iframe>' );
  }

  if(storeElement) {
    storeElement.style.display = "none";
  }
  if(couponElement) {
    couponElement.style.display = "none";
  }
  if(iFrame) {
    iFrame.style.display = "block";
  }
});

router.on("/user/:id/:action", function (match) {
  document.querySelector("#app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("/about", function (match) {
  document.querySelector("#app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("/about?abc", function (match) {
  document.querySelector("#app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("/post/:id", function (match) {
  document.querySelector("#app").innerHTML = `<pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

router.on("*", function (match) {
  document.querySelector("#app").innerHTML = `* <pre>${JSON.stringify(
    match,
    null,
    2
  )}</pre>`;
});

// jQuery(document).ready(function (params) {
//   console.log("ready");
//   router.resolve(null, { noMatchWarning: false });
// });

var callback = function () {
  router.resolve(null, { noMatchWarning: false });
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
