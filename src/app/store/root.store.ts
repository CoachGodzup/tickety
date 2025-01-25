import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./card.reducer";

const rootReducer = {
    cards: cardReducer,
}

export const rootStore = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootStore.getState>;
