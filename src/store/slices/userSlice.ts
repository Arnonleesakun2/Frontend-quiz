import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type StateProp = {
  title: string;
  firstname: string;
  lastname: string;
  birthday: string | null;
  nationality: string;
  citizenId: string;
  gender: string;
  phone: {
    code: string;
    number: string;
  };
  passport: string;
  expectedSalary: string;
};
const initialState: { 
  user: StateProp[];
  editData: StateProp | null;
} = {
  user: [],
  editData: null
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<StateProp>) => {
      state.user.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.user = state.user.filter(user => user.citizenId !== action.payload);
    },
    setEditData: (state, action: PayloadAction<StateProp>) => {
      state.editData = action.payload;
    },
    clearEditData: (state) => {
      state.editData = null;
    },
    editUser: (state, action: PayloadAction<StateProp>) => {
      const index = state.user.findIndex(user => user.citizenId === action.payload.citizenId);
      if (index !== -1) {
        state.user[index] = action.payload;
      }
      state.editData = null; // Clear edit data after successful edit
    },
  }
});
export const { setData, deleteUser, editUser, setEditData, clearEditData } = userSlice.actions;
export default userSlice.reducer;
