<template>
  <aside
    class="bg-white text-black flex flex-col w-16 oveflow-hidden h-screen p-2 transition ease-out duration-2000 fixed z-30 md:relative"
    :class="`${isExpanded && 'is-expanded'}`"
  >
    <div class="text-[#013CC6] h-12">
      Sales
    </div>
    <div
      class="flex mb-4 relative top-0 transition ease-out duration-200"
      :class="`${isExpanded && 'toggler-rotate'}`"
    >
      <button @click="ToggleMenu" class="hover:translate-x-2">
        <span class="material-icons transition ease-out duration-200"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>
    <h3 class="text-gray-400 uppercase">Menu</h3>
    <div v-for="item in navLinks" :key="item.to" class="-my-4">
      <router-link
        :to="`${item.to}`"
        class="cursor-pointer flex items-center my-6 transition ease-out duration-300 hover:bg-gray-500 group"
      >
        <span
          class="material-icons transition ease-out duration-200 text-[#131313] group-hover:text-[#0B63F8] group-[.router-link-exact-active]:text-[#0B63F8]"
          >{{ item.icon }}</span
        >
        <span
          class="w-full mx-2 opacity-0 transition ease-out duration-300 group-hover:text-[#0B63F8] group-[.router-link-exact-active]:text-[#0B63F8]"
          :class="`${isExpanded && 'opacity-100 transition-none'}`"
          >{{ item.text }}</span
        >
      </router-link>
    </div>
  </aside>
</template>
<script setup>
import { ref } from "vue";
const isExpanded = ref(false);
const navLinks = [
  { to: "/", icon: "home", text: "Home" },
  { to: "/test", icon: "science", text: "Lab Test" },
  { to: "/appointment", icon: "today", text: "Appointment" },
  { to: "/contact", icon: "email", text: "Contact" },
];
const ToggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
<style scoped>
.is-expanded {
  width: 250px;
}
.toggler-rotate {
  top: -3rem;
  transform: rotate(-180deg);
}
.router-link-exact-active {
  border-right: 2px solid #0B63F8;
}
</style>
