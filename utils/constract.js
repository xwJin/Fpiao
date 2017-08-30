const HOST = "https://wx.ppiaoapp.com";

// 单条信息查询
var findInvoiceById = HOST + "/invoice/findInvoiceById";

// 删除发票接口
var deleteInvoiceByid = HOST + "/invoice/deleteInvoiceByid";

// 新增接口
var insertInvoice = HOST + "/invoice/insertInvoice";

// 发票更新接口
var updateInvoiceById = HOST + "/invoice/updateInvoiceById";

// 查询所有发票信息接口
var findAllInvoice = HOST + "/invoice/findAllInvoice";

// 入口
var login = HOST + "/token/login";

// 授权成功
var register = HOST + "/token/register";

// 未授权
var noauthorize = HOST + "/token/noauthorize";

// 分享接口
var saveInvoiceByShare = HOST + "/invoice/saveInvoiceByShare";

// 非第一次点击分享
var findInvoiceById2 = HOST + "/invoice/findInvoiceById2";












module.exports = {
  findInvoiceById: findInvoiceById,
  deleteInvoiceByid: deleteInvoiceByid,
  insertInvoice: insertInvoice,
  updateInvoiceById: updateInvoiceById,
  findAllInvoice: findAllInvoice,
  login: login,
  register: register,
  noauthorize: noauthorize,
  saveInvoiceByShare: saveInvoiceByShare,
  findInvoiceById2: findInvoiceById2
}

