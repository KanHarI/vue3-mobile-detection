This package adds mobile detection in vue.js 3 projects.

Installation:
```
npm i vue3-mobile-detection

<OR>

yarn add vue3-mobile-detection
```

## Composition API - recommended

```
// MyComponent.vue
<template>
  <div id="app">
    <!-- Use in template -->
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>
import { useMobileDetection } from "vue3-mobile-detection";

export default defineComponent({
  setup() {
    const { isMobile } = useMobileDetection();
    return { isMobile };
  }
});
</script>
```

## Legacy - usage as plugin

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