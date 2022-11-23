import { createSlice } from '@reduxjs/toolkit'
import { CartState } from '../../types'

function setFavorites() {
  if (!localStorage.getItem('favorites')) {
    const items: [] = []
    const quantity = 0
    return { items, quantity }
  }

  const items: [] = JSON.parse(localStorage.getItem('favorites') || '{}')
  const quantity: number = items.length || 0

  return { items, quantity }
}

const initialState: CartState = {
  items: setFavorites().items || [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, capital } = action.payload
      const country = { name, capital }
      const isDuplicate = state.items.some(
        (item) => item.name.common === country.name.common
      )
      if (isDuplicate) return
      state.items = [...state.items, action.payload]
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name.common !== action.payload
      )
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
