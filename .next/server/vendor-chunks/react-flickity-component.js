"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-flickity-component";
exports.ids = ["vendor-chunks/react-flickity-component"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-flickity-component/dist/react-flickity-component.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-flickity-component/dist/react-flickity-component.es.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ r)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imagesloaded */ \"(ssr)/./node_modules/imagesloaded/imagesloaded.js\");\n/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst u = !!(typeof window < \"u\" && window.document && window.document.createElement);\nclass r extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(e) {\n    super(e), this.state = {\n      flickityReady: !1,\n      flickityCreated: !1,\n      cellCount: 0\n    }, this.carousel = null, this.flkty = null;\n  }\n  static getDerivedStateFromProps(e, t) {\n    const i = react__WEBPACK_IMPORTED_MODULE_0___default().Children.count(e.children);\n    return i !== t.cellCount ? { flickityReady: !1, cellCount: i } : null;\n  }\n  componentDidUpdate(e, t) {\n    if (!this.flkty)\n      return;\n    const {\n      children: i,\n      options: { draggable: l, initialIndex: n },\n      reloadOnUpdate: c,\n      disableImagesLoaded: d\n    } = this.props, { flickityReady: f } = this.state;\n    if (c || !t.flickityReady && f) {\n      const p = this.flkty.isActive;\n      this.flkty.deactivate(), this.flkty.selectedIndex = n || 0, this.flkty.options.draggable = l === void 0 ? i ? i.length > 1 : !1 : l, p && this.flkty.activate(), !d && this.carousel && imagesloaded__WEBPACK_IMPORTED_MODULE_2___default()(this.carousel, () => {\n        this.flkty.reloadCells();\n      });\n    } else\n      this.flkty.reloadCells();\n  }\n  async componentDidMount() {\n    if (!u || !this.carousel)\n      return null;\n    const e = (await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/flickity\"), __webpack_require__.e(\"vendor-chunks/unipointer\"), __webpack_require__.e(\"vendor-chunks/unidragger\"), __webpack_require__.e(\"vendor-chunks/get-size\"), __webpack_require__.e(\"vendor-chunks/fizzy-ui-utils\"), __webpack_require__.e(\"vendor-chunks/desandro-matches-selector\")]).then(__webpack_require__.t.bind(__webpack_require__, /*! flickity */ \"(ssr)/./node_modules/flickity/js/index.js\", 23))).default, { flickityRef: t, options: i } = this.props;\n    this.flkty = new e(this.carousel, i), t && t(this.flkty), this.props.static ? this.setReady() : this.setState({ flickityCreated: !0 });\n  }\n  setReady() {\n    if (this.state.flickityReady)\n      return;\n    const e = () => this.setState({ flickityReady: !0 });\n    this.props.disableImagesLoaded ? e() : imagesloaded__WEBPACK_IMPORTED_MODULE_2___default()(this.carousel, e);\n  }\n  renderPortal() {\n    if (!this.carousel)\n      return null;\n    const e = this.carousel.querySelector(\".flickity-slider\");\n    if (e) {\n      const t = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(this.props.children, e);\n      return setTimeout(() => this.setReady(), 0), t;\n    }\n  }\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n      this.props.elementType,\n      {\n        className: this.props.className,\n        ref: (e) => {\n          this.carousel = e;\n        }\n      },\n      this.props.static ? this.props.children : this.renderPortal()\n    );\n  }\n}\nr.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  disableImagesLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  elementType: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  flickityRef: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),\n  options: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),\n  reloadOnUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  static: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)\n};\nr.defaultProps = {\n  className: \"\",\n  disableImagesLoaded: !1,\n  elementType: \"div\",\n  options: {},\n  reloadOnUpdate: !1,\n  static: !1\n};\n\n//# sourceMappingURL=react-flickity-component.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxpY2tpdHktY29tcG9uZW50L2Rpc3QvcmVhY3QtZmxpY2tpdHktY29tcG9uZW50LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNJO0FBQ2pCO0FBQ0Y7QUFDM0I7QUFDQSxnQkFBZ0IsNENBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyxxREFBVTtBQUN4QixpQ0FBaUMsa0NBQWtDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBLE1BQU0sZ0JBQWdCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0EsOExBQThMLG1EQUFDO0FBQy9MO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9kQUFrQixhQUFhLDZCQUE2QjtBQUNqRixvSEFBb0gscUJBQXFCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RCwyQ0FBMkMsbURBQUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFDO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQU87QUFDbkIsYUFBYSwwREFBUTtBQUNyQix1QkFBdUIsd0RBQU07QUFDN0IsZUFBZSwwREFBUTtBQUN2QixlQUFlLHdEQUFNO0FBQ3JCLFdBQVcsMERBQVE7QUFDbkIsa0JBQWtCLHdEQUFNO0FBQ3hCLFVBQVUsd0RBQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZWxvbmcvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxpY2tpdHktY29tcG9uZW50L2Rpc3QvcmVhY3QtZmxpY2tpdHktY29tcG9uZW50LmVzLmpzP2UzM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG8sIHsgQ29tcG9uZW50IGFzIGggfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCBhcyB5IH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IGEgZnJvbSBcImltYWdlc2xvYWRlZFwiO1xuaW1wb3J0IHMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmNvbnN0IHUgPSAhISh0eXBlb2Ygd2luZG93IDwgXCJ1XCIgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmNsYXNzIHIgZXh0ZW5kcyBoIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHN1cGVyKGUpLCB0aGlzLnN0YXRlID0ge1xuICAgICAgZmxpY2tpdHlSZWFkeTogITEsXG4gICAgICBmbGlja2l0eUNyZWF0ZWQ6ICExLFxuICAgICAgY2VsbENvdW50OiAwXG4gICAgfSwgdGhpcy5jYXJvdXNlbCA9IG51bGwsIHRoaXMuZmxrdHkgPSBudWxsO1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZSwgdCkge1xuICAgIGNvbnN0IGkgPSBvLkNoaWxkcmVuLmNvdW50KGUuY2hpbGRyZW4pO1xuICAgIHJldHVybiBpICE9PSB0LmNlbGxDb3VudCA/IHsgZmxpY2tpdHlSZWFkeTogITEsIGNlbGxDb3VudDogaSB9IDogbnVsbDtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoZSwgdCkge1xuICAgIGlmICghdGhpcy5mbGt0eSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbjogaSxcbiAgICAgIG9wdGlvbnM6IHsgZHJhZ2dhYmxlOiBsLCBpbml0aWFsSW5kZXg6IG4gfSxcbiAgICAgIHJlbG9hZE9uVXBkYXRlOiBjLFxuICAgICAgZGlzYWJsZUltYWdlc0xvYWRlZDogZFxuICAgIH0gPSB0aGlzLnByb3BzLCB7IGZsaWNraXR5UmVhZHk6IGYgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGMgfHwgIXQuZmxpY2tpdHlSZWFkeSAmJiBmKSB7XG4gICAgICBjb25zdCBwID0gdGhpcy5mbGt0eS5pc0FjdGl2ZTtcbiAgICAgIHRoaXMuZmxrdHkuZGVhY3RpdmF0ZSgpLCB0aGlzLmZsa3R5LnNlbGVjdGVkSW5kZXggPSBuIHx8IDAsIHRoaXMuZmxrdHkub3B0aW9ucy5kcmFnZ2FibGUgPSBsID09PSB2b2lkIDAgPyBpID8gaS5sZW5ndGggPiAxIDogITEgOiBsLCBwICYmIHRoaXMuZmxrdHkuYWN0aXZhdGUoKSwgIWQgJiYgdGhpcy5jYXJvdXNlbCAmJiBhKHRoaXMuY2Fyb3VzZWwsICgpID0+IHtcbiAgICAgICAgdGhpcy5mbGt0eS5yZWxvYWRDZWxscygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAgICB0aGlzLmZsa3R5LnJlbG9hZENlbGxzKCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF1IHx8ICF0aGlzLmNhcm91c2VsKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZSA9IChhd2FpdCBpbXBvcnQoXCJmbGlja2l0eVwiKSkuZGVmYXVsdCwgeyBmbGlja2l0eVJlZjogdCwgb3B0aW9uczogaSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmZsa3R5ID0gbmV3IGUodGhpcy5jYXJvdXNlbCwgaSksIHQgJiYgdCh0aGlzLmZsa3R5KSwgdGhpcy5wcm9wcy5zdGF0aWMgPyB0aGlzLnNldFJlYWR5KCkgOiB0aGlzLnNldFN0YXRlKHsgZmxpY2tpdHlDcmVhdGVkOiAhMCB9KTtcbiAgfVxuICBzZXRSZWFkeSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mbGlja2l0eVJlYWR5KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmxpY2tpdHlSZWFkeTogITAgfSk7XG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlSW1hZ2VzTG9hZGVkID8gZSgpIDogYSh0aGlzLmNhcm91c2VsLCBlKTtcbiAgfVxuICByZW5kZXJQb3J0YWwoKSB7XG4gICAgaWYgKCF0aGlzLmNhcm91c2VsKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZSA9IHRoaXMuY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5mbGlja2l0eS1zbGlkZXJcIik7XG4gICAgaWYgKGUpIHtcbiAgICAgIGNvbnN0IHQgPSB5KHRoaXMucHJvcHMuY2hpbGRyZW4sIGUpO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRSZWFkeSgpLCAwKSwgdDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBvLmNyZWF0ZUVsZW1lbnQoXG4gICAgICB0aGlzLnByb3BzLmVsZW1lbnRUeXBlLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChlKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXJvdXNlbCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzLnByb3BzLnN0YXRpYyA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnJlbmRlclBvcnRhbCgpXG4gICAgKTtcbiAgfVxufVxuci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzLmFycmF5LFxuICBjbGFzc05hbWU6IHMuc3RyaW5nLFxuICBkaXNhYmxlSW1hZ2VzTG9hZGVkOiBzLmJvb2wsXG4gIGVsZW1lbnRUeXBlOiBzLnN0cmluZyxcbiAgZmxpY2tpdHlSZWY6IHMuZnVuYyxcbiAgb3B0aW9uczogcy5vYmplY3QsXG4gIHJlbG9hZE9uVXBkYXRlOiBzLmJvb2wsXG4gIHN0YXRpYzogcy5ib29sXG59O1xuci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgZGlzYWJsZUltYWdlc0xvYWRlZDogITEsXG4gIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICBvcHRpb25zOiB7fSxcbiAgcmVsb2FkT25VcGRhdGU6ICExLFxuICBzdGF0aWM6ICExXG59O1xuZXhwb3J0IHtcbiAgciBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtZmxpY2tpdHktY29tcG9uZW50LmVzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-flickity-component/dist/react-flickity-component.es.js\n");

/***/ })

};
;