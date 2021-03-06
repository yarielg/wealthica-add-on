import { Addon } from "@wealthica/wealthica.js";
import { LABELS } from "@/constants";
import isEqual from "lodash/fp/isEqual";

export default {
  state: {
    addon: null,
    options: {},
    positions: [],
    loading: true,
    preferredCurrencyId: "",
    currencies: {}
  },
  getters: {
    addon: state => state.addon,
    addonOptions: ({ options }) => options || {},
    positions: ({ positions }) => positions,
    language: (state, getters) => getters.addonOptions.language || "en",
    loading: state => state.loading,
    currency: (state, getters) => getters.addonOptions.currency,
    currencies: state => state.currencies,
    preferredCurrencyId: state => state.preferredCurrencyId,
    preferredCurrency: state => state.currencies[state.preferredCurrencyId],
    allocations: (state, getters) => {
      let netAmount = 0;
      const allocations = [0, 1].map(index => ({
        label: LABELS[index],
        amount: 0,
        cntHoldings: 0,
        percent: 0,
        symbols: []
      }));

      getters.positions.forEach(position => {
        const index = position.class === "equity" ? 1 : 0;

        allocations[index].amount += position.value;
        allocations[index].cntHoldings += 1;

        if (position.security) {
          allocations[index].symbols.push(
            position.security.symbol || position.security.name
          );
        }

        netAmount += position.value;
      });

      if (netAmount > 0) {
        allocations.forEach((allocation, index) => {
          allocations[index].percent = parseFloat(
            ((100 * allocation.amount) / netAmount).toFixed(2)
          );
          allocations[index].symbolsList = allocation.symbols.join(", ");
        });
      }

      return allocations;
    }
  },
  mutations: {
    SET_ADDON(state, data) {
      state.addon = data;
    },
    SET_OPTIONS(state, data) {
      state.options = data;
    },

    SET_POSITIONS(state, data) {
      state.positions = data;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    STORE_PREFERRED_CURRENCY_ID(state, id) {
      state.preferredCurrencyId = id;
    },
    STORE_CURRENCIES(state, currencies) {
      state.currencies = currencies.reduce(
        (result, item) => ({ ...result, [item._id]: item }),
        state.currencies
      );
    }
  },
  actions: {
    initAddon({ commit, dispatch }) {
      // This is only required in the add-on release preparation process.
      const addonConfiguration =
        process.env.VUE_APP_DEVELOPER_ADDON === "true"
          ? {}
          : { id: "wealthica/wealthica-risk-profile-addon" };

      const addon = new Addon(addonConfiguration);
      commit("SET_ADDON", addon);

      addon
        .on("init", options => dispatch("updateData", options))
        .on("update", options => dispatch("updateData", options));
    },
    async updateData({ getters, commit, dispatch }, options) {
      const oldFilters = {
        groups: getters.addonOptions.groupsFilter,
        institutions: getters.addonOptions.institutionsFilter,
        investments: getters.addonOptions.investmentsFilter
      };

      commit("SET_OPTIONS", options);

      const newFilters = {
        groups: getters.addonOptions.groupsFilter,
        institutions: getters.addonOptions.institutionsFilter,
        investments: getters.addonOptions.investmentsFilter
      };

      if (isEqual(oldFilters, newFilters)) return;

      commit("SET_LOADING", true);

      await dispatch("fetchCurrencies");
      await dispatch("fetchPositions");
      commit("SET_LOADING", false);
    },
    async fetchPositions({ commit, getters }) {
      const { addonOptions } = getters;

      const positions = await getters.addon.api.getPositions({
        institutions: addonOptions.institutionsFilter,
        investments: addonOptions.investmentsFilter,
        groups: addonOptions.groupsFilter
      });
      commit("SET_POSITIONS", positions);
    },
    async fetchCurrencies({ commit, getters }) {
      const { addon } = getters;
      const currencies = await addon.api.getCurrencies();
      const preferred = currencies.find(currency => currency.preferred);

      commit("STORE_PREFERRED_CURRENCY_ID", preferred._id);
      commit("STORE_CURRENCIES", currencies);
    }
  }
};
