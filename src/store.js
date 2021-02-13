import { writable, derived } from "svelte/store"

export const brand = "MaskDAO"
export const modal = writable(false)

export const setModal = function(value) {
  modal.set(value)
}
