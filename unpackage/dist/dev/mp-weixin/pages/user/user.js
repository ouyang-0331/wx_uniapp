"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userinfo = common_vendor.ref(null);
    const getUserInfo = () => {
      api_apis.apiUserInfo().then((res) => {
        userinfo.value = res.data;
      });
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userinfo.value
      }, userinfo.value ? {
        b: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        c: common_vendor.t(userinfo.value.address.city || userinfo.value.address.province || userinfo.value.address.country),
        d: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        e: common_vendor.t(userinfo.value.downloadSize),
        f: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        g: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        h: common_vendor.t(userinfo.value.scoreSize),
        i: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        j: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        k: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        l: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        m: common_vendor.p({
          type: "help-filled",
          size: "20"
        }),
        n: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      } : {
        o: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        p: common_vendor.p({
          status: "loading"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "C:/Users/ZhuanZ/Desktop/bizhi-uniapp/univue3/wx_uniapp/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
