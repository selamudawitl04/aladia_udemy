import { defineStore } from "pinia";
export const useCourseStore = defineStore({
  id: "course",

  state: () => {
    return {
      planPopupOpen: false,
      personalTabActive: false,
    };
  },

  getters: {
    isPlanPopupOpened() {
      return this.planPopupOpen;
    },
    isPersonalPlanActive() {
      return this.personalTabActive;
    },
  },

  actions: {
    handleOpenPlanPopup(value) {
      this.planPopupOpen = value;
    },
    handleChangePlanTab(value) {
      this.personalTabActive = value;
    },
  },
});

// import { defineStore } from "pinia";
// export const useEntityStore = defineStore({
//   id: "entity",
//   state: () => {
//     return {
//       entityId: null,
//       selectedPlan: null,
//       paymentCreated: false,
//     };
//   },
//   persist: {
//     storage: persistedState.localStorage,
//   },
//   getters: {
//     getPlan() {
//       return this.selectedPlan;
//     },
//     getEntityId() {
//       return this.entityId;
//     },
//     isPaymentCreated() {
//       return this.paymentCreated;
//     },
//   },

//   actions: {
//     setPlan(selectedPlan) {
//       this.selectedPlan = selectedPlan;
//     },
//     setEntityId(entityId) {
//       this.entityId = entityId;
//     },
//     setPaymentCreated(value) {
//       this.paymentCreated = value;
//     },
//     clearEntityStore() {
//       this.entityId = null;
//       this.selectedPlan = null;
//       this.paymentCreated = false;
//     },
//   },
// });
