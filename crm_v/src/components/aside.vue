<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    :node-key="'FunctionId'"
    :highlight-current="true"
    :current-node-key="currentNodeKey"
    :auto-expand-parent="true"
    :default-expanded-keys="expandedKeys"
    accordion
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
export default {
  data() {
    let route = this.$route
    let flist = JSON.parse(this.$store.state.userInfo.FunctionList)
    let currentNode, expandedNode
    expandedNode = flist.find(node => {
      currentNode = node.children.find(n => {
        return n.url === route.name
      })
      return currentNode
    })
    const cnkey = currentNode ? currentNode.FunctionId : ''
    const epkeys = expandedNode ? [expandedNode.FunctionId] : []

    let funlist = JSON.parse(this.$store.state.userInfo.FunctionList)
    console.log(funlist, '菜单')
    funlist = funlist.sort(sortFn)
    funlist.forEach(function(item) {
      item.children = item.children.sort(sortFn)
    })

    function sortFn(a, b) {
      return a.Rank > b.Rank
    }

    const data = {
      data: funlist,
      defaultProps: {
        children: 'children',
        label: 'FunctionName'
      },
      currentNodeKey: cnkey, // 一级目录
      expandedKeys: epkeys // 二级目录
    }
    // console.log(data)
    return data
  },
  methods: {
    handleNodeClick(data) {
      if (data.FunctionUrl.indexOf('.') > 0) {
        this.$router.push(data.FunctionUrl.split('.')[1])
      }
    }
  }
}
</script>

<style>
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background-color: #000;
}
.el-tree-node__content:hover {
  background-color: #000;
}
</style>
