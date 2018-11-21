import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => {
        import('../pages/Login/Login').then((module) => {
          resolve(module)
        })
      }
    },
    {
      path: '/imgManage',
      name: 'ImgManage',
      component: (resolve) => {
        import('../pages/common/ImgManage').then((module) => {
          resolve(module)
        })
      }
    },
    {
      path: '/noPage',
      name: 'noPage',
      component: (resolve) => {
        import('../pages/common/NoPage').then((module) => {
          resolve(module)
        })
      }
    },
    {
      path: '/',
      name: 'Home2',
      component: (resolve) => {
        import('../components/Home2').then((module) => {
          resolve(module)
        })
      },
      children: [
        {
          path: '/firstPage',
          name: 'firstPage',
          component: (resolve) => {
            import('../pages/firstPage/firstPage').then((module) => {
              resolve(module)
            })
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Home4Manage',
      component: (resolve) => {
        import('../components/Home4Manage').then((module) => {
          resolve(module)
        })
      },
      children: [
        {
          path: '/commodity',
          name: '汽车商品',
          component: (resolve) => {
            import('../pages/carCommodity/commodity').then((module) => {
              resolve(module)
            })
          }
       },
       {
          path: '/commodityEdit',
          name: '汽车商品编辑',
          component: (resolve) => {
            import('../pages/carCommodity/commodityEdit').then((module) => {
              resolve(module)
            })
          }
       },
       {
          path: '/demo',
          name: 'demo',
          component: (resolve) => {
            import('../pages/demo/demo/demo').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/apply',
          name: '预约看车',
          component: (resolve) => {
            import('../pages/order/apply/apply').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/sell',
          name: '预约卖车',
          component: (resolve) => {
            import('../pages/order/apply/sell').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/brand',
          name: '汽车品牌',
          component: (resolve) => {
            import('../pages/brand/brand/brand').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/store',
          name: '门店列表',
          component: (resolve) => {
            import('../pages/store/manage/list').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/brandEdit',
          name: '汽车品牌编辑',
          component: (resolve) => {
            import('../pages/brand/brand/brandEdit').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/select',
          name: '品牌选择',
          component: (resolve) => {
            import('../pages/brand/brand/select').then((module) => {
              resolve(module)
            })
          }
        },
        {
          path: '/selectBrand',
          name: '品牌选择',
          component: (resolve) => {
            import('../pages/brand/brand/selectBrand').then((module) => {
              resolve(module)
            })
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Home4Set',
      component: (resolve) => {
        import('../components/Home4Set').then((module) => {
          resolve(module)
        })
      },
      children: [
        {
          path: '/setting',
          name: '小程序设置',
          component: (resolve) => {
            import('../pages/setting/setting/setting').then((module) => {
              resolve(module)
            })
          }
        }
      ]
    }
  ]
})
