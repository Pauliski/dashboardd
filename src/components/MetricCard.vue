<template>
  <main class="py-3 px-4 bg-white mt-6 rounded-xl ">
    <div>
      <p class="text-[#5F6980] text-sm">{{ cardDetails.title }}</p>
      <h1 class="text-xl text-[#282828] font-semibold">$ {{ cardDetails.value }}</h1>
    </div>
    <div class="mt-6 text-xs">
      <span class="px-2 py-0.5 rounded-lg" :class="+cardDetails.currentValue > 0 ? 'bg-[#DCFFF5] text-[#20C997]': 'bg-[#FFE0E3] text-[#DC3545]'"
        >{{cardDetails.currentValue}}%</span
      >
      <span class="text-[#9D9FA1] ml-2">From {{cardDetails.initialValue}}%</span>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    cardDetails: {
      type: Object,
      default: () => {
        return {
          title: '',
          value: '',
          currentValue: '',
          initialValue: ''
        };
      },
    },
  },
};
</script>

<style></style>
