import "./css/main.scss";
import "../node_modules/tippy.js/dist/tippy.css";
import "./css/search.scss";
import "bootstrap";
import Popper from "popper.js";
import tippy from "tippy.js";
import ReactDOM from "react-dom";
import React from "react";
import SearchPage from "./js/components/SearchPage";
import { initSentry } from "./js/sentry";
import { setupEmailSignupForm } from "./js/mailchimp";
window.jQuery = $;
window.$ = $;
window.Popper = Popper;
$(document).ready(() => {
  // hacky coming-soon popover
  document.querySelectorAll(".coming-soon").forEach(el => {
    tippy(el, {
      content: "Coming soon!",
      trigger: "click",
      placement: "top"
    });
  });
  const searchPageEl = document.querySelector("#search-page");

  if (searchPageEl) {
    ReactDOM.render(<SearchPage />, searchPageEl);
  }

  setupEmailSignupForm();
  initSentry();
});
