<template>
  <div class="home-body">
    <div class="home-main">
      <div class="teammacau-home-title">팀마카오</div>
      <div class="teammacau-home-description">
        <div class="px-mt-30 px-mb-10">우리는 다이버다.</div>
      </div>
      <!-- <div class="teammacau-home-description">
        <div class="px-mb-10">팀마카오는 스쿠버 다이빙팀 입니다.</div>
        <div class="px-mb-10">스쿠버 다이빙을 하며 삶의 휴식과 즐거움을 찾습니다.</div>
        <div>해양의 아름답고 풍요로움을 느끼며</div>
        <div class="px-mb-10">사랑하고 보호합니다.</div>
        <div>다양한 분야에서 활동하고 있으며,</div>
        <div>지역 사회의 발전을 위해 다양한 이벤트를 합니다.</div>
      </div> -->
    </div>

    <div class="home-timeline-wrap">
      <timeline />
      <img src="@/assets/images/KakaoTalk_Image_2021-08-12-16-34-55_003.copy.png">
      <!-- <div>2021 7 마카오 회칙 제정</div>
      <div>2021 7 왕돌초 투어</div>
      <div>2021 6 2021 개해제</div>
      <div>2019 7 마카오 탄생</div>
      <div>2020 5 2020 개해제</div>
      <div>2019 11 마카오 9인 체제</div>
      <div>2019 9 팀마카오 3인으로 탄생</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timeline from '@/components/Main/Timeline.vue';
// import TopMenu from '@/components/Header/TopMenu.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Timeline,
    // TopMenu
  },
  setup () {
    return {
      
    }
  }
});
</script>

<style lang="scss">
$homeMainBorderWidth: 3px;

.home-body {
  .test-class {
    display: none;
  }
  .block {
    display: block;
  }
}



.home-main {
  height: 100%;
  background: #cff7ff;
  // background: #cff7ff url('../assets/images/beach.jpg') no-repeat center;
  background-size: 100% auto;
  // border-left: $homeMainBorderWidth solid #effaff;
  // border-right: $homeMainBorderWidth solid #effaff;
  padding: 50px 0;
}

.teammacau-home-title {
  font-weight: 700;
  font-size: 2em;
}

.teammacau-home-description {
  font-size: 1em;
  font-weight: 500;
  width: 337px;
  margin: auto;
  // text-align: left;
  // min-width: 500px;
  overflow: hidden;

  // border: 2px solid #3090a0;
}

.home-timeline-wrap {
  margin-top: 60px;
}
</style>
