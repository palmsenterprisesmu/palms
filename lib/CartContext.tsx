'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import type { Product } from './products'

// ─── SHOPIFY HOOK ─────────────────────────────────────────────────────────────
// When integrating Shopify, replace addItem / removeItem / updateQty with
// Storefront API cart mutations:
//   cartCreate, cartLinesAdd, cartLinesUpdate, cartLinesRemove
// variantKey here maps to a Shopify ProductVariant.id
// ─────────────────────────────────────────────────────────────────────────────

export type CartItem = {
  product:  Product
  quantity: number
  colour:   string | null   // e.g. 'white' | 'navy' | null for no-colour products
  size:     string | null   // e.g. 'M' | 'L/XL' | null for no-size products
  variantKey: string        // unique per product+colour+size combo
}

type CartCtx = {
  items:      CartItem[]
  addItem:    (product: Product, colour: string | null, size: string | null) => void
  removeItem: (variantKey: string) => void
  updateQty:  (variantKey: string, qty: number) => void
  clearCart:  () => void
  totalItems: number
  totalPrice: number
  isOpen:     boolean
  openCart:   () => void
  closeCart:  () => void
}

const Ctx = createContext<CartCtx | null>(null)

function makeVariantKey(id: number, colour: string | null, size: string | null) {
  return `${id}__${colour ?? 'none'}__${size ?? 'none'}`
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems]   = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('palms-cart')
    if (saved) setItems(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('palms-cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, colour: string | null, size: string | null) => {
    const variantKey = makeVariantKey(product.id, colour, size)
    setItems(prev => {
      const exists = prev.find(i => i.variantKey === variantKey)
      if (exists) return prev.map(i => i.variantKey === variantKey ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { product, quantity: 1, colour, size, variantKey }]
    })
    setIsOpen(true)
  }

  const removeItem = (variantKey: string) =>
    setItems(prev => prev.filter(i => i.variantKey !== variantKey))

  const updateQty = (variantKey: string, qty: number) => {
    if (qty < 1) return removeItem(variantKey)
    setItems(prev => prev.map(i => i.variantKey === variantKey ? { ...i, quantity: qty } : i))
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <Ctx.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
      totalItems, totalPrice,
      isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
    }}>
      {children}
    </Ctx.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
