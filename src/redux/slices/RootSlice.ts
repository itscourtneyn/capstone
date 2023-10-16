import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        id: "ID",
        title: "Title",
        contributor: "Contributor",
        ingredients: "Ingredients",
        instructions: "Instructions",
    },
    reducers: {
        chooseID: (state, action) => { state.id = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseContributor: (state, action) => { state.contributor = action.payload},
        chooseIngredients: (state, action) => { state.ingredients = action.payload},
        chooseInstructions: (state, action) => { state.instructions = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseID, chooseTitle, chooseContributor, chooseIngredients, chooseInstructions} = rootSlice.actions