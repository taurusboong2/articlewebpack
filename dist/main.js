/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _article_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);




const url = new URL(window.location);
const urlID = url.searchParams.get("id");

const getData = async () => {
    let url = 'http://localhost:1337/api/articles';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }
        throw new Error('ERROR!');
    } catch (error) {
        console.log(error);
    }
}

let myData = () => {
    getData().then(res => {
        let list = document.querySelector("#list");
        let data = res.data;
        let result = ``;
        data.forEach( e => {
            let id = e.id;
            result += `
            <li>
                <a href="article_detail.html?id=${id}">
                    <h2>${e.attributes.title}</h2>
                    <p>${e.attributes.createdAt}</p>
                </a>
            </li>
        `
        })
        list.innerHTML = result;
    })
}

const putData2 = async () => {
    let url = `http://localhost:1337/api/articles/${urlID}`;
    const title = document.querySelector("#detail_title");
    const author = document.querySelector("#detail_author");
    const des = document.querySelector("#detail_des");
    const type = document.querySelector("#detail_type");
    const create = document.querySelector("#create_data");
    const update = document.querySelector("#update_data");
    try {
        const response = await fetch(url);
        if(response.ok) {
            const jsonResponse = await response.json();
            const dataAttr = jsonResponse.data.attributes;
            title.innerHTML = dataAttr.title;
            type.innerHTML = dataAttr.type;
            des.innerHTML = dataAttr.description;
            author.innerHTML = dataAttr.author;
            create.innerHTML = dataAttr.createdAt;
            update.innerHTML = dataAttr.updatedAt;
            // return jsonResponse;
        }
    } catch (err) {
        console.log(err);
    }
    const updateBtn = document.querySelector('#update_btn');
    updateBtn.setAttribute('href',`article_update.html?id=${urlID}`);
}


const deleteData = async () => {
    try {
        const response = await fetch(`http://localhost:1337/api/articles/${urlID}`, {
            method:'DELETE',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(response);
            console.log(jsonResponse);
        }
    } catch (err) {
        console.log(err);
    }
    location.href = "article.html";
}

const updatePage = async () => {
    getData().then( res => {
        const data = res.data;
        const title = document.querySelector("#ud_title");
        const author = document.querySelector("#ud_author");
        const des = document.querySelector("#ud_des");
        data.forEach( e => {
            if(urlID == e.id) {
                title.value = e.attributes.title;
                des.value = e.attributes.description;
                author.value = e.attributes.author;
            }
        })
    })
}


const updateData = async () => {
    let thisURL = `http://localhost:1337/api/articles/${urlID}`;
    const title = document.querySelector("#ud_title");
    const author = document.querySelector("#ud_author");
    const des = document.querySelector("#ud_des");
    const titleValue = title.value;
    const authorValue = author.value;
    const desValue = des.value;
    const type = document.querySelector("#ud_type");
    const typeValue = type.options[type.selectedIndex].value;
    const data = JSON.stringify({ "data" : { 
        "title" : titleValue,
        "description" : desValue,
        "author" : authorValue,
        "type" : typeValue
        } 
    });
    try {
        const response = await fetch(thisURL, {
            method: 'PUT',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            location.href = `article_detail.html?id=${urlID}`;
            return jsonResponse;
        }
    } catch (err) {
        console.log(err);
    }
    
}

const ff = async () => {
    let url = `http://localhost:1337/api/articles`;
    const getData = await fetch(url);
    console.log(getData);
    const dataJson = await getData.json();
    console.log(dataJson);
    console.log(dataJson.data);
}
ff();
console.log(ff);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
let url = 'http://localhost:1337/api/articles';
let submitBtn = document.querySelector('#submit_btn');

const sendData = async () => {
    let title = document.querySelector('#title');
    let des = document.querySelector('#des');
    let author = document.querySelector('#author');
    let type = document.querySelector('input[name="type"]:checked');
    const titleValue = title.value;
    const desValue = des.value;
    const authorValue = author.value;
    const typeValue = type.value;
    const data = JSON.stringify({ "data" : { 
        "title" : titleValue,
        "description" : desValue,
        "author" : authorValue,
        "type" : typeValue
        } 
    });
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            // return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }

    //input 값 초기화
    title.value = null;
    des.value = null;
    author.value = null;

    //html 경로 이동
    location.href = "article.html";
}

submitBtn.addEventListener("click", sendData);
})();

/******/ })()
;