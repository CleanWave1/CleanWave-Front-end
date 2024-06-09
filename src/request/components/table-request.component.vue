<script>
import {Request} from "@/request/model/request.entity.js";
import {RequestApiService} from "@/request/services/request-api.service.js";

export default {
  name: "table-request",
  data() {
    return {
      requests: [],
      requestDialog: false,
      deleteRequestDialog: false,
      deleteRequestsDialog: false,
      request: null,
      selectedRequests: null,
      filters: {},
      submitted: false,
      requestService: null
    }
  },
  created() {
    this.initialize(); // Llama a la función initialize
  },
  methods: {
    initialize() {
      console.log('created');
      this.requestService = new RequestApiService();
      this.requestService.getAll()
          .then((response) => {
            this.requests = response.data;
            this.requests = this.requests.map(
                (request) => {
                  return Request.toDisplayableRequest(request);
                }
            );
          });
    }
  }
}
</script>

<template>
  <pv-data-table ref="dt" v-model:selection="selectedRequests"
                 :filters="filters"
                 :paginator="true"
                 :rows="10"
                 :rowsPerPageOptions="[5, 10, 15]"
                 :value="requests"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} requests"
                 dataKey="id"
                 paginatorTemplate= 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
                 responsiveLayout="scroll">
    <template #header>
    </template>
    <pv-column :exportable="false" selectionMode="multiple" style="width: 3rem"/>
    <pv-column :sortable="true" field="id" header="Código de Servicio" style="min-width: 12rem"/>
    <pv-column :sortable="true" field="employer" header="Empleador" style="min-width: 16rem"/>
    <pv-column :sortable="true" field="ubication" header="Ubicación" style="min-width: 16rem"/>
    <pv-column :sortable="true" field="applicationDate" header="Fecha Solicitada" style="min-width: 12rem"/>
    <pv-column :sortable="true" field="payment" header="Pago" style="min-width: 12rem"/>
    <pv-column :sortable="true" field="status" header="Estado" style="min-width: 12rem"/>
  </pv-data-table>
</template>

<style scoped>

</style>