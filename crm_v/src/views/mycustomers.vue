<template>
<div class="customers">
  <h3 class="vheader">我的客户</h3>
  <div class="vsearch">
    <el-form ref="params" :inline="true" :model="params">
      <el-form-item label="公司名称">
        <el-input class="inputWid" placeholder="公司名称" v-model="params.companyName"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input class="inputWid" placeholder="公司名称" v-model="params.phone"></el-input>
      </el-form-item>
      <el-form-item label="意向度">
        <el-select class="inputWid" v-model="params.CustomerTypeId " clearable placeholder="全部">
          <el-option v-for="data in cuscategoryTree" :key="data.CustomerTypeId" :label="data.Name" :value="data.CustomerTypeId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select class="inputWid" v-model="params.tagIds" @change="getTagId" @handleOptionClick="tagSelect" multiple placeholder="全部">
          <el-option-group v-for="group in tagsModel" :key="group.label" :label="group.label">
            <el-option v-for="data in group.options" :key="data.Id" :label="data.TagName" :value="data.Id">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="法人">
        <el-input class="inputWid" placeholder="法人" v-model="params.legalPerson"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-date-picker class="inputWid" v-model="params.starttime" type="date" placeholder="开始日期">
        </el-date-picker>
        <span>-</span>
        <el-date-picker class="inputWid" v-model="params.endtime" type="date" placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="订单类型">
        <el-select class="inputWid" v-model="params.Category " clearable placeholder="全部">
          <el-option v-for="data in orderType" :key="data.Category" :label="data.name" :value="data.Category">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="代理商">
        <el-select class="inputWid" v-model="params.agents " clearable placeholder="请选择">
          <el-option v-for="data in agents" :key="data.ChannelId" :label="data.ChannelName" :value="data.ChannelId">
          </el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import ElSelect from '../components/select'
import {
  cuscategory,
  tags
} from '../api/api'
export default {
  data: function() {
    return {
      params: {
        companyName: '',
        phone: '',
        CustomerTypeId: '',
        tagIds: ''
      },
      cuscategoryTree: [],
      tagGroup: {},
      tags: [],
      tagsModel: [],
      curtag: '',
      tagId: []
    }
  },
  created() {
    this.getCuscategory()
    this.getTags()
  },
  methods: {
    fetchData() {
      console.log(this.params.tagIds)
    },
    getCuscategory() {
      cuscategory().then((res) => {
        this.cuscategoryTree = res.data
      })
    },
    getTags() {
      tags().then((res) => {
        this.tags = res.data
        this.tagGroup = window._.groupBy(this.tags, 'TagType')
        let arr = []
        for (let key in this.tagGroup) {
          let obj = {}
          obj.label = key
          obj.options = this.tagGroup[key]
          arr.push(obj)
        }
        this.tagsModel = arr
        console.log(this.tagsModel, 'this.tagsModel')
      })
    },
    getTagId(curId) {
      // console.log(this.params.tagIds, 'tagIds')
      console.log(curId, '当前已经选择的tagId')
      console.log(this.curtag, '当前选择的curtag')
      for (let j in curId) {
        for (let i in this.tags) {
          console.log(this.tags[i].Id, curId[j], this.tags[i].Id === curId[j])
          if (this.tags[i].Id === curId[j]) { // 如果当前ID等于总的id 取出当前item
            this.tagId.push(this.tags[i]) // 当前被选中所以条目组成的ID数组
            window._.remove(this.tagId, function(item) {
              return item.TagType === this.curtag.TagType
            })
            console.log(this.tagId, '最终的选择数组')
            return
          }
        }
      }
    },
    tagSelect(tag) {
      // console.log(tag)
      // console.log(tag.$options.parent.label, '组名')
      // console.log(tag.value)
      for (let i in this.tags) {
        if (this.tags[i].Id === tag.value) {
          // console.log(this)
          this.curtag = this.tags[i]
        }
      }
      // console.log(this.tagId, 'tagId')
    }
  },
  components: {
    ElSelect
  }
}
</script>

<style scoped>
</style>
