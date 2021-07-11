<template>
  <div class="teammacau-home-title">팀마카오</div>
  <div class="teammacau-home-description">
    <div class="mb10">팀마카오는 스쿠버 다이빙팀 입니다.</div>
    <div class="mb10">스쿠버 다이빙을 하며 삶의 휴식과 즐거움을 찾습니다.</div>
    <div>해양의 아름답고 풍요로움을 느끼며</div>
    <div class="mb10">사랑하고 보호합니다.</div>
    <div>다양한 분야에서 활동하고 있으며,</div>
    <div>지역 사회의 발전을 위해 다양한 이벤트를 합니다.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss">
.teammacau-home-title {
  font-weight: 700;
  font-size: 4rem;
  margin-bottom: 40px;
}
</style>
