<!-- Percent Bar -->
<template>
  <div class="percent-bar">
    <button @click="minusClick">&minus;</button>
    <div class="outer-bar">
      <div class="inner-bar" :style="'width:' + record.percent + '%'"></div>
    </div>
    <button @click="plusClick">+</button>
  </div>
</template>

<script>
export default {
  name: 'PercentBar',
  props: ['record'],

  setup(props) {
    function minusClick() {
      // eslint-disable-next-line
      const { record } = props;
      // eslint-disable-next-line
      const value = record.percent;
      // eslint-disable-next-line
      record.percent = value <= 0 ? 0 : value - 1;
    }

    function plusClick() {
      // eslint-disable-next-line
      const { record } = props;
      // eslint-disable-next-line
      const value = record.percent;
      // eslint-disable-next-line
      record.percent = value >= 100 ? 100 : value + 1;
    }

    return {
      minusClick,
      plusClick
    };
  }
};
</script>
<style lang="scss">
.percent-bar {
  display: flex;
  flex: 1;
  align-items: center;
  .outer-bar {
    flex: 1;
    background: #e0e0e0;
    height: 0.8em;
  }
  .inner-bar {
    background: #27ca37;
    height: 0.8em;
  }
  button {
    width: 1.6em;
    height: 1.6em;
    background-color: #8888ff;
    border-radius: 1em;
    margin: 0 0.5em 0 0.5em;
    font-weight: bold;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #9999ff;
  }
}
</style>
