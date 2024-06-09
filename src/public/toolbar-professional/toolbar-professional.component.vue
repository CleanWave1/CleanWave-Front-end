<script>
export default {
  name: "toolbar-professional"
}
</script>

<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #9FFFB0;">
      <template #start>
        <div class="flex align-items-center gap-2">
        </div>
      </template>

      <template #end>
        <pv-icon-field class="pi pi-bell notifications" style="font-size: 1.5rem; color:black;"></pv-icon-field>
        <pv-button iconPosition="left" class="account" style="color: black; border: black solid 1px">
          <pv-input-icon class="pi pi-user user" > </pv-input-icon>MyAccount
          <pv-icon-field class="pi pi-sort-down-fill arrow" style="font-size: 1rem; color:black;"></pv-icon-field>
        </pv-button>
      </template>
    </pv-toolbar>
  </div>
</template>
<style>

pv-toolbar{
  background-color: #9FFFB0;
}
.notifications{
  margin-right: 20px;
}
.account{
  background-color: #E0E0E0;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user{
  margin-right: 10px;
}
.arrow{
  margin-left: 10px;
}
</style>