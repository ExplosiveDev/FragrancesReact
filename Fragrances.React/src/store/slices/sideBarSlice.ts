import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface SideBarState {
    isOpen: boolean;
    childrenKey:string | null;
}

const initialState: SideBarState = {
    isOpen: false,
    childrenKey: null as "login" | "registration" | "basket" | null ,

}

export const sideBarSlice = createSlice({
    name: "activeSidebarChilldren",
    initialState,
    reducers: {
        changeAction:(state, action: PayloadAction<{childrenKey: "login" | "registration" | "basket" | null}>) => {
            const {childrenKey} = action.payload;
            state.childrenKey = childrenKey;
            if(childrenKey == null) state.isOpen = false;
            else state.isOpen = true;     
        }
    }
})

export default sideBarSlice.reducer;

export const {changeAction} = sideBarSlice.actions;