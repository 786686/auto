<template>
  <div class="info-page">
    <top />
    
    
    <!-- 共赢 -->
    <div class="win">
        <img src="../assets/win1.jpg" alt="">
        <img src="../assets/win2.jpg" alt="">
        <img src="../assets/win3.jpg" alt="">
    </div>
    
    <bottom />
  </div>
</template>

<script>
import top from "./header";
import bottom from "./footer";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
