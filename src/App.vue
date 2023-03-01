<template>
  <div class="flex">
    <SideBar />
    <div class="flex flex-col flex-1 bg-[#E5E5E5] ml-16 px-5 md:px-10 md:ml-0 py-14 ">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar";
</script>

<style></style>
