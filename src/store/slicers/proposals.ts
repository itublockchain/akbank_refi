import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vote } from "classes/Vote";

type State = {
  proposals: Vote[];
};

const initialState: State = {
  proposals: [],
};

export const proposalSlicer = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    setProposals: (state, action: PayloadAction<Vote[]>) => {
      state.proposals = action.payload;
    },
  },
});

export const { setProposals } = proposalSlicer.actions;
export default proposalSlicer.reducer;
