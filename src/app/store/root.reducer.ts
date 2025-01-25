import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./card.reducer";

export type RootState = ReturnType<typeof rootState.getState>;

export const rootState = configureStore({
    reducer: {
        cards: cardReducer,
    }
});