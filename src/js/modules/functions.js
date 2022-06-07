// Проверка поддержки webpб, добавление класса webp или no-webp для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIi"
    }
    // Добавление класса _webp или _no-webp для HNML
    testWebP(function (support) {
        let className = support ===true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}