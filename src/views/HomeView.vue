<template>
  <main class="">
    <AppHeaderVue />
    <PremiumCard />
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 flex-wrap w-full gap-4">
      <MetricCard
        v-for="cardDetail in cardInfo"
        :key="cardDetail.title"
        :cardDetails="cardDetail"
      />
    </div>
    <InstalledApp :appDetails="appDetails"  />
  </main>
</template>

<script setup>
import AppHeaderVue from "../components/AppHeader";
import PremiumCard from "../components/PremiumCard";
import MetricCard from "../components/MetricCard";
import InstalledApp from "../components/InstalledApp.vue";

const cardInfo = [
  { value: 1000, initialValue: "4.6", currentValue: "+45", title: "Revenue" },
  { value: 1500, initialValue: "4.6", currentValue: "-15", title: "Revenue" },
  { value: 1200, initialValue: "4.6", currentValue: "-5", title: "Revenue" },
  { value: 800, initialValue: "4.6", currentValue: "+35", title: "Revenue" },
];
const appDetails = [
  {
    logo: "/img/figma.svg",
    companyName: "Figma",
    amount: "834.00",
    status: "Pending",
    user_id: "76223",
    dateJoined: "June",
    group: "Finance",
  },
  {
    logo: "/img/zeplin.svg",
    companyName: "Zepplin",
    amount: "8686.00",
    status: "Active",
    user_id: "114423",
    dateJoined: "October",
    group: "Design",
  },
  {
    logo: "/img/meta.svg",
    companyName: "Meta",
    amount: "176.00",
    status: "Cancelled",
    user_id: "89453",
    dateJoined: "March",
    group: "Coding",
  },
  {
    logo: "/img/angular.svg",
    companyName: "Angular",
    amount: "49.00",
    status: "Active",
    user_id: "11467",
    dateJoined: "February",
    group: "Marketing",
  },
   {
    logo: "/img/vue.svg",
    companyName: "Vue",
    amount: "999.00",
    status: "Active",
    user_id: "67385",
    dateJoined: "October",
    group: "Finance",
  },
];
</script>

<style></style>
