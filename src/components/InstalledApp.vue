<template>
  <main class="w-full">
    <div class="w-32 min-w-full overflow-x-auto">
      <table class="mt-8 w-full min-w-[700px]">
        <thead class="bg-white h-12">
          <th colspan="5" class="text-left rounded-tl-xl"><span class="ml-6">Installed apps</span> </th>
          <th class="text-right rounded-tr-xl">
            <span class="material-icons mr-5 ">more_vert</span>
          </th>
        </thead>
        <thead class="h-12 text-sm text-[#5F6980]">
          <th class="text-left font-normal"><span class="ml-6"></span> Source</th>
          <th class="text-left font-normal ">Amount</th>
          <th class="text-left font-normal">Status</th>
          <th class="text-left font-normal">User ID</th>
          <th class="text-left font-normal">Joined</th>
          <th class="text-left font-normal">Group</th>
        </thead>
        <tbody v-for="appDetail in appDetails"  :key="appDetail" class="bg-white">
          <tr class="border-y-2 h-12">
            <td class="text-left">
              <div class="flex items-center ml-6">
                <img :src="appDetail.logo" :alt="appDetail.companyName" />
                <span class="ml-4 text-sm text-[#282828] font-semibold" >{{ appDetail.companyName }}</span>
              </div>
            </td>
            <td class="text-sm text-[#5F6980]">{{ appDetail.amount }}</td>
            <td><span class="rounded-xl py-0.5 px-2 text-xs" :class="appDetail.status === 'Active' ? 'bg-[#DCFFF5] text-[#20C997]': appDetail.status === 'Pending'? 'bg-[#FFEAD8] text-[#FD7E14]': 'bg-[#F2F4F7] text-[#5F6980]'">{{ appDetail.status }}</span></td>
            <td class="text-sm text-[#5F6980]">{{ appDetail.user_id }}</td>
            <td class="text-sm text-[#5F6980]">{{ appDetail.dateJoined }}</td>
            <td class="text-sm text-[#5F6980]">{{ appDetail.group }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
    props: {
    appDetails: {
      type: Object,
      default: () => {
        return {
          logo: '',
          companyName: '',
          amount: '',
          status: '',
          user_id: '',
          dateJoined: '',
          group: ''
        };
      },
    },
  },
};
</script>

<style></style>
