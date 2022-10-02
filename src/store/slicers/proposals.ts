import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vote } from "classes/Vote";

type State = {
  proposals: Vote[];
  refetchKey: number;
  currentVote: Vote | null;
};

const initialState: State = {
  proposals: [],
  refetchKey: 0,
  currentVote: null,
};

export const proposalSlicer = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    setProposals: (state, action: PayloadAction<Vote[]>) => {
      state.proposals = action.payload;
    },
    setRefetchKey: (state, action: PayloadAction<number>) => {
      state.refetchKey = action.payload;
    },
    setCurrentVote: (state, action: PayloadAction<Vote>) => {
      state.currentVote = action.payload;
    },
  },
});

export const { setProposals, setRefetchKey, setCurrentVote } =
  proposalSlicer.actions;
export default proposalSlicer.reducer;
