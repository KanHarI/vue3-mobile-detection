This package adds mobile detection in vue.js 3 projects.

Installation:
```
npm i vue3-mobile-detection
```

Usage - plugin installation:
```
import Vue3MobileDetection from "vue3-mobile-detection";
import { createApp } from "vue";

let app = createApp(App);
app.use(Vue3MobileDetection);
```

Usage - in component:
```
<template>
  <div id="app">
    <!-- Use in template -->
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>
export default {
  created() {
    // Use in js
    console.log(this.$isMobile());
  }
};
</script>
```