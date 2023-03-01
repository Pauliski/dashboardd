<template>
  <main class="flex items-center">
    <div class="w-full flex items-center bg-white border rounded-xl relative">
      <span class="material-icons ml-2 text-xl">search</span>
      <input
        placeholder="search"
        type="text"
        class="w-full border-none outline-none rounded-xl searchbar py-3 px-4"
      />
    </div>
    <div class="mx-8 relative">
      <img src="/img/vector.svg" alt="bell" />
      <div class="rounded-full w-1.5 h-1.5 bg-red-600 absolute -top-1 -right-1"></div>
    </div>
    <div class="mr-8">
      <img src="/img/calendar.svg" alt="calendar" />
    </div>

    <div class="mr-8">
      <img src="/img/union.svg" alt="dash-icon" />
    </div>
    <div class="relative" >
      <img src="/img/person.svg" alt="dash-icon" />
      <div class="rounded-full w-1.5 h-1.5 bg-green-600 absolute bottom-0 right-0"></div>
    </div>
  </main>
</template>

<script></script>

<style scoped></style>
