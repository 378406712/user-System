<template>
  <div class="select4">
   <baidu-map class="map" :center="{lng: 116.566956, lat: 39.875176}" :zoom="15">
    <bm-marker :position="{lng: 116.5679532, lat:39.875133}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="优就业" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -25, height: 50}"/>
    </bm-marker>
  </baidu-map>
  </div>
</template>

<script>

export default {
  name: "select4",
 
};
</script>

<style  scoped>

.map {
  margin-left: 15%;
  width: 100%;
  height: 400px;
}
</style>