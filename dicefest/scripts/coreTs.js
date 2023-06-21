var __awaiter=this&&this.__awaiter||function(e,i,t,s){return new(t||(t=Promise))((function(n,r){function o(e){try{p(s.next(e))}catch(e){r(e)}}function a(e){try{p(s.throw(e))}catch(e){r(e)}}function p(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,a)}p((s=s.apply(e,i||[])).next())}))},__generator=this&&this.__generator||function(e,i){var t,s,n,r,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,s&&(n=2&r[0]?s.return:r[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,r[1])).done)return n;switch(s=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,s=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){o.label=r[1];break}if(6===r[0]&&o.label<n[1]){o.label=n[1],n=r;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(r);break}n[2]&&o.ops.pop(),o.trys.pop();continue}r=i.call(e,o)}catch(e){r=[6,e],s=0}finally{t=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},API_URL="http://localhost:3031",Xhr=function(){function e(){}return e.Get=function(e,i){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(s){return this.URL=e,t=i?this.URL+"?"+this.getOptions(i):this.URL,[2,this.send("GET",t)]}))}))},e.Post=function(e,i){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.URL=e,[2,this.send("POST",this.URL,i)]}))}))},e.send=function(e,i,t){var s=this;return new Promise((function(n,r){s.xhr=new XMLHttpRequest,s.xhr.open(e,i),s.xhr.setRequestHeader("Content-type","application/json; charset=utf-8"),s.xhr.responseType="json",s.xhr.onload=function(){s.xhr.status<405?n(s.xhr.response):r(s.xhr.response)},s.xhr.onerror=function(){r(s.xhr.response)},s.xhr.send(JSON.stringify(t))}))},e.getOptions=function(e){return Object.entries(e).map((function(e){return e.join("=")})).join("&")},e.URL="",e}(),LoadItem=function(){function e(e){var i=this;this.items=[],this.itemPopup=null,this.itemPopupContent=null,this.openItemCard=function(e){var t,s,n=e.target.closest(".j-load-item").dataset.id;i.itemPopupContent&&(i.itemPopupContent.innerHTML=""),null===(t=i.itemPopup)||void 0===t||t.dispatchEvent(new CustomEvent("open")),null===(s=i.itemPopup)||void 0===s||s.dispatchEvent(new CustomEvent("showLoader")),i.loadItemInfo(n)},this.loadItemInfo=function(e){console.log("ОБРАБОТКА ОТВЕТА",e),setTimeout((function(){i.itemPopupContent&&(i.itemPopupContent.innerHTML='\n      <div class="game-popup-form__gallery">\n        <div class="game-popup-form__gallery-card">\n            <div class="swiper-container j-gallery-top">\n                <div class="swiper-wrapper">\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"> </div>\n                </div>\n                <div class="swiper-pagination game-popup-form__gallery-pagination"></div>\n            </div>\n            <div class="swiper-navigation game-popup-form__gallery-navigation">\n                <div class="swiper-button-prev"> </div>\n                <div class="swiper-button-next"></div>\n            </div>\n        </div>\n        <div class="game-popup-form__gallery-list">\n            <div class="swiper-container j-gallery-thumbs">\n                <div class="swiper-wrapper">\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"> </div>\n                    <div class="swiper-slide" style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"> </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="game-popup-form__feat-description">\n        <div class="game-popup-form__features">\n            <div class="game-popup-feature">\n                <div class="game-popup-feature__icon game-popup-feature__icon--players"></div>\n                <div class="game-popup-feature__text">1-4 игрока</div>\n            </div>\n            <div class="game-popup-feature">\n                <div class="game-popup-feature__icon game-popup-feature__icon--clock"></div>\n                <div class="game-popup-feature__text">90-150 минут</div>\n            </div>\n            <div class="game-popup-feature">\n                <div class="game-popup-feature__icon">0+</div>\n                <div class="game-popup-feature__text">Правила игры</div>\n            </div>\n        </div>\n        <h2>Roll Player Adventures: Приключения в Улосе</h2>\n        <div class="game-popup-form__description">\n            <div class="game-popup-description">\n                <p class="game-popup-description__title">Дата выхода:</p>\n                <p class="game-popup-description__text">24 сентября 2023</p>\n            </div>\n            <div class="game-popup-description">\n                <p class="game-popup-description__title">Начало предзаказа:</p>\n                <p class="game-popup-description__text">01 марта 2023</p>\n            </div>\n        </div>\n        <p>Roll Player Adventures: Приключения в Улосе" — это кооперативная повествовательная настольная игра, в которой вам предстоит спасти мир Улоса! В роли солдат Королевской гвардии игроки будут принимать решения, от которых зависят судьбы как отдельных людей, так и целых городов – а то и стран!</p>\n        <div class="game-popup-form__description">\n            <div class="game-popup-description">\n                <p class="game-popup-description__title">Производитель:</p>\n                <p class="game-popup-description__text">Hobby World, Thunderworks Games</p>\n            </div>\n        </div>\n        <div class="game-popup-form__additional">\n            <div class="drop-down-list-item j-game-drop-down-list-item"><button class="drop-down-list-item__header j-drop-down-list-item-button">\n                    <div class="drop-down-list-item__label">Обзоры</div>\n                </button>\n                <div class="drop-down-list-item__content j-drop-down-list-item-content">\n                    <div class="drop-down-list-item__container">\n                        <div class="game-popup-frame__list"> <a class="game-popup-frame__item" href="https://www.youtube.com/watch?v=bGTBkOCphUc" target="_blank" rel="noopener noreferer"><iframe src="https://www.youtube.com/embed/bGTBkOCphUc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a><a class="game-popup-frame__item" href="https://www.youtube.com/watch?v=bGTBkOCphUc" target="_blank" rel="noopener noreferer"><iframe src="https://www.youtube.com/embed/bGTBkOCphUc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a><a class="game-popup-frame__item" href="https://www.youtube.com/watch?v=bGTBkOCphUc" target="_blank" rel="noopener noreferer"><iframe src="https://www.youtube.com/embed/bGTBkOCphUc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </a></div>\n                    </div>\n                </div>\n            </div>\n            <div class="drop-down-list-item j-game-drop-down-list-item"><button class="drop-down-list-item__header j-drop-down-list-item-button">\n                    <div class="drop-down-list-item__label">Комплектация</div>\n                </button>\n                <div class="drop-down-list-item__content j-drop-down-list-item-content">\n                    <div class="drop-down-list-item__container">\n                        <ul>\n                            <li>12 книг приключений</li>\n                            <li>Книга навыков</li>\n                            <li>6 двухсторонних полей приключений</li>\n                            <li>4 планшета персонажей</li>\n                            <li>Размер карт: 41x63 мм (рекомендуются протекторы из данного раздела, 36 шт.)</li>\n                            <li>Вес: 6.52 кг</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n        ')}),1e3)},this.items=Array.from(e.querySelectorAll(".j-load-item")),this.itemPopup=document.querySelector(".j-game-popup"),this.itemPopupContent=document.querySelector(".j-game-popup-content")}return e.prototype.init=function(){var e=this;this.items.forEach((function(i){i.addEventListener("click",e.openItemCard)}))},e}();document.querySelectorAll(".j-load-block").forEach((function(e){new LoadItem(e).init()}));