import request from '@/utils/request'

// export function roleListFun(data) {
//   return request({
//     url: 'adminRole/getAllRoleList',
//     method: 'post',
//     data: data
//   })
// }

// export function rulesList(data) {
//   return request({
//     url: 'adminMenu/getAllMenuList',
//     method: 'post',
//     data: data
//   })
// }

export function roleAddAPI(data) {
  return request({
    url: 'admin/groups/save',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function roleDeleteAPI(data) {
  return request({
    url: 'admin/groups/delete',
    method: 'post',
    data: data
  })
}

export function roleUpdateAPI(data) {
  return request({
    url: 'admin/groups/update',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function updateRoleMenuAPI(data) {
  return request({
    url: 'admin/groups/update',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 角色复制
 * @param {*} data
 */
export function roleCopyAPI(data) {
  return request({
    url: 'admin/groups/copy',
    method: 'post',
    data: data
  })
}

/**
 * 复制员工角色
 * @param {*} data
 */
export function adminRoleRelatedDeptUserAPI(data) {
  return request({
    url: 'admin/users/copyRole',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 添加编辑员工
 * @param {*} data
 */
export function adminRoleRelatedUserAPI(data) {
  return request({
    url: 'admin/users/groups',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 删除员工
 * @param {*} data
 */
export function unbindingUserAPI(data) {
  return request({
    url: 'admin/users/groupsDel',
    method: 'post',
    data: data
  })
}

/**
 * 角色分类列表
 * @param {*} data
 */
export function adminGroupsTypeListAPI(data) {
  return request({
    url: 'admin/groups/typeList',
    method: 'post',
    data: data
  })
}

/**
 * 参数 roleType   根据角色类型查询角色列表
 * @param {*} roleType
 */
export function systemRoleByTypeAPI(data) {
  return request({
    url: `admin/groups/index`,
    method: 'post',
    data
  })
}

/**
 * 规则
 * @param {*} roleType
 */
export function systemRuleByTypeAPI(data) {
  return request({
    url: `admin/rules/index`,
    method: 'post',
    data
  })
}

/**
 * 查询字段授权设置
 * @param {*} data
 */
export function systemRoleGetFieldAPI(data) {
  return request({
    url: 'admin/fieldGrant/index',
    method: 'post',
    data: data
  })
}

/**
 * 模块设置字段授权
 * @param {*} data
 */
export function systemRoleSetFieldAPI(data) {
  return request({
    url: 'admin/fieldGrant/update',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}
