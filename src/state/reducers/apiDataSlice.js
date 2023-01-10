import { createSlice } from '@reduxjs/toolkit'

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    kpis: {
      ageStandardDeviation: 0,
      ageAverage: 0,
    },
    clients: [],
  },
  reducers: {
    updateKpis: (state, action) => {
      state.kpis = action.payload;
    },
    updateClients: (state, action) => {
      state.clients = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateClients, updateKpis } = apiDataSlice.actions

export const kpisSelector = (state) => state.apiData.kpis;
export const clientsSelector = (state) => state.apiData.clients;

export default apiDataSlice.reducer