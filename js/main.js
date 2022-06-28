const elUrlShortener = document.querySelector(".url-shortener");
const elUrlShortenerForm = document.querySelector(".js-url-shortener-form");
const elUrlShortenerResults = document.querySelector(".url-shortener__results");
// const elCopyShortLinkButton = document.querySelector(".js-copy-short-link-button");


if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    elUrlShortenerResults.classList.add("url-shortener__results--open");
  });

}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (){
    if (evt.target.matches(".js-copy-short-link-button")){
      evt.target.textContent = "Copied";
      evt.target.classList.add("url-shortener__copy-button--copied");

      navigator.clipboard.writeText(evt.target.previousElementSibling);

      setTimeout(function (){
        evt.target.textContent = "Copy";
        evt.target.classList.remove("url-shortener__copy-button--copied");

      }, 1000)
    }
  });
}
