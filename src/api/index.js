import http from './public'
export const host = 'https://wx.chinaxywl.com'
// const host = '/xywl'

export const ERR_OK = 201

// 登录接口
export const loginUrl = host + '/api/auth/login';

// 登出接口
export const logoutUrl = host + '/api/auth/logout';

// 授权接口
export const authorizationUrl = host + '/api/authorization';

// 小程序信息获取
export const infoUrl = host + '/api/wxapp/info';

// 小程序信息修改
export const infoSaveUrl = host + '/api/wxapp/save';

// 小程序体验二维码
export const qrocdeUrl = host + '/api/wxapp/visit-qrcode';

// 获取图片信息
export const getImageUrl = host + '/api/upload/store-images';

// 上传图片
export const uploadUrl = host + '/api/upload/upload';

// 获取图片组
export const getGroupsUrl = host + '/api/upload/groups';

// 添加组
export const addGroupsUrl = host + '/api/upload/add-group';

// 删除组
export const deleteGroupsUrl = host + '/api/upload/delete-group';

// 提交审核
export const auditUrl = host + '/api/wxapp/audit';

// 提交审核
export const storesUrl = host + '/api/store/stores';

// 图片移动到分组
export const movePicToGroupUrl = host + '/api/upload/move-group';

// 上传小程序代码
export const commitCodeUrl = host + '/api/wxapp/commit';

// 品牌分类列表数据载入
export const brandCategoryUrl = host + '/api/caradmin/category';

// 添加/取消首页显示
export const brandCategoryFastUrl = host + '/api/caradmin/category-fast';

// 添加/取消显示
export const brandCategoryShowUrl = host + '/api/caradmin/category-show';

// 删除分类
export const brandCategoryDeleteUrl = host + '/api/caradmin/category-delete';

// 选择分类数据载入
export const brandCategoryChooseUrl = host + '/api/caradmin/category-choose';

// 选择分类
export const brandCategoryEditUrl = host + '/api/caradmin/category-edit';

//车型列表
export const carTypeUrl = host + '/api/caradmin/car';

// 单个车型信息展示
export const categoryShowUrl = host + '/api/caradmin/category-show';

// 资源加载
export const getResourceUrl = host + '/api/caradmin/car-resource';

// 添加/修改车型
export const carAddEditUrl = host + '/api/caradmin/car-edit';

// 单个车型信息展示
export const carShowUrl = host + '/api/caradmin/car-show';

// 预约买车
export const buyCarUrl = host + '/api/caradmin/buy';

// 预约卖车
export const sellCarUrl = host + '/api/caradmin/sell';

// 删除车型
export const carDeleteUrl = host + '/api/caradmin/car-delete';

// 删除卖车信息
export const buyDeleteUrl = host + '/api/caradmin/buy-delete'; 

// 删除卖车信息
export const sellDeleteUrl = host + '/api/caradmin/sell-delete'; 

// 标记已处理买车信息
export const buySureUrl = host + '/api/caradmin/buy-sure'; 

// 标记已处理买卖信息
export const sellSureUrl = host + '/api/caradmin/sell-sure'; 

// 门店列表
export const shopUrl = host + '/api/caradmin/shop'; 

// 车型是否显示
export const carIsShowUrl = host + '/api/caradmin/car-isshow'; 

// 车型是否首页
export const carIsFeatureUrl = host + '/api/caradmin/car-feature'; 
