"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const detail = common_vendor.ref({});
    let noticeId;
    common_vendor.onLoad((e) => {
      noticeId = e.id;
      getNoticeDetail();
    });
    const getNoticeDetail = () => {
      api_apis.apiNoticeDetail({ id: noticeId }).then((res) => {
        detail.value = res.data;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          inverted: true,
          text: "置顶",
          type: "error"
        }),
        b: common_vendor.p({
          date: "2025-2-18 15:23:45"
        }),
        c: common_vendor.t(detail.value.view_count)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f737f11"], ["__file", "C:/Users/ZhuanZ/Desktop/bizhi-uniapp/univue3/wx_uniapp/pages/notice/detail.vue"]]);
wx.createPage(MiniProgramPage);
