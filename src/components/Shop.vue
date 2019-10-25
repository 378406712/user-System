<template>
  <div class>
    <Head></Head>
    <div class="covers">
      <div class="up-content">
        <table class="table table-striped">
          <thead>
            <tr id="first">
              <td v-for="item of characters" :key="item">{{item}}</td>
            </tr>
          </thead>
          <tbody id="app">
            <tr v-for="(item,index) of lists" :key="index">
              <td>{{index}}</td>
              <td>{{item.phoneName}}</td>
              <td><img class="pics" :src="srcs" alt=""></td>
              <td>{{item.type}}</td>
              <td>{{item.single}}</td>
              <td>
                <button class="btn btn-primary minus" @click="minus(lists,index)">-</button>
                <span class="count">{{item.counts}}</span>
                <button class="btn btn-primary plus" @click="plus(lists,index)">+</button>
              </td>
              <!-- 小计 -->
              <td class="price">{{item.price}}</td>
            </tr>
          </tbody>
        </table>

        <p class="total">
          总价: ￥
          <span>{{sum}}</span>
        </p>
      </div>

      <div class="down-content">
        <p class="form-tit">添加到购物车</p>
        <div class="form-group">
          <label for="exampleInputEmail1">名称</label>
          <b-form-select
            v-model="phoneName"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">型号</label>
          <b-form-select
            v-model="type"
            :options="types"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">单价</label>
          <input
            type="text"
            class="form-control"
            v-model.number="single"
            id="exampleInputPassword1"
            placeholder
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">数量</label>
          <input
            type="text"
            class="form-control"
            v-model.number="counts"
            id="exampleInputPassword1"
            placeholder
          />
        </div>
        <button class="btn btn-primary btn-block add" @click="add(lists,index)">添加</button>

        <button class="btn btn-success btn-block reset" @click="reset(lists,index)">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./Head";
import pics from "./../assets/imgs/QQ图片20190731193402.jpg";
export default {
  name: "",

  components: { Head },
  data() {
    return {
      srcs:pics,
      characters: ["#", "名称", "图例", "型号", "价格", "选取", "小计"],
      index: 0,
      orders: "",
      phoneName: "",
    type:null,
      counts: null, //数量
      price: null, //小计
      single: null, //单价
      singleArr: [], //单价数组
      countsArr: [], //数量数组
      priceArr: [], //小计数组
      totals: [], //总价数组
      lists: [], //tr行渲染

      options: [
        { item: "小米", name: "小米" },
        { item: "华为", name: "华为" },
        { item: "苹果", name: "苹果" }
      ],
      types: [
        { item: "小米9", name: "小米9" },
        { item: "华为mate", name: "华为mate" },
        { item: "苹果4", name: "苹果4" }
      ]
    };
  },
  methods: {
    add(val, index) {
      if (this.phoneName === "") {
        alert("名称不能为空");
      }
      if (this.type === "") {
        alert("型号不能为空");
      }
      if (typeof this.single != "number") {
        alert("价格为必须为数字且不能为空");
      }
      if (typeof this.counts != "number") {
        alert("数量必须为数字且不能为空");
      } else {
        this.lists.push({
          orders: this.index++,
          phoneName: this.phoneName,
          type: this.type,
          counts: this.counts,
          single: this.single,
          price: this.single * this.counts
        });
        this.reset();
        this.countsArr.push(this.lists[index].counts);
        this.priceArr.push(this.lists[index].price);
        this.singleArr.push(this.lists[index].single);
        //总价数组 totals
        var summation = this.lists[index].counts * this.lists[index].price;
      }
    },
    reset() {
      this.phoneName = " ";
      this.type = " ";
      this.counts = " ";
      this.single = " ";
    },
  
    plus(val, index) {
      this.lists[index].counts += 1;
      this.lists[index].price =
        this.lists[index].counts * this.lists[index].single;
      this.priceArr.splice(index, 1, this.lists[index].price);
    },
    minus(val, index) {
      if (this.lists[index].counts > 0) {
        this.lists[index].counts -= 1;
        this.lists[index].price =
          this.lists[index].counts * this.lists[index].single;
        this.priceArr.splice(index, 1, this.lists[index].price);
      }
    }
  },
  computed: {
    sum() {
      var res = this.priceArr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

      return res; //reduce求和后return出
    }
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
td {
  text-align: center;
  height: 45px;
  line-height: 45px;
}
.covers {
  margin: 0 auto;
  max-width: 1226px;
}
.covers .up-content {
  margin-bottom: 40px;
}
.covers .up-content .count {
  display: inline-block;
  padding: 0 10px;
}
.covers .up-content .total {
  text-align: right;
  font-size: 32px;
}
.covers .down-content .form-tit {
  text-align: center;
  font-size: 27px;
}
.plus,
.minus {
  width: 40px;
  height: 40px;
}
</style>
<style>
.add,
.reset {
  margin-top: 40px;
  margin-bottom: 20px;
  height: 40px;
}
.pics{
  width: 45px;height: 45px;
}
</style>