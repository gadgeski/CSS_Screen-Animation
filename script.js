// LoadingAnimation
window.addEventListener("load", () => {
  const loadingElement = document.querySelector("#loading");
  const mainContent = document.querySelector("#main");

  // ローディング終了時クラス付与
  loadingElement.classList.add("loading-animation");

  // アニメーション終了後にローディング要素を非表示にし、メインコンテンツを表示
  loadingElement.addEventListener("animationend", () => {
    loadingElement.style.display = "none";
    mainContent.classList.add("is-active"); // メインコンテンツを表示するためのクラスを追加
  });
});
