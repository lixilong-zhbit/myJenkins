
<template>
  <div id="myservice">
    <div class="layout">
      <div class="left-container">
        <img src="./1.jpg" class="imgClass" />
      </div>
      <div class="right-container">
        <div class="title">
          <span>开发指南1</span>
        </div>
        <div class="remark">
          <span>学习文档知识2</span>
        </div>
        <div class="description">
          <span>这是一个很好的知识3</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>



<style lang="stylus" scoped>
#myservice {
  margin: 20px;

  .layout {
    .left-container {
      display: inline-block;
      vertical-align: top;

      .imgClass {
        width: 100px;
        height: 100px;
      }
    }

    .right-container {
      display: inline-block;
      vertical-align: top;

      .title {
        font-size: 26px;

        span {
          line-height: 30px;
        }
      }

      .remark, .description {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
}
</style>

