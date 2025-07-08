// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:nether_wart', 9), // output item with count
    [
      'minecraft:nether_wart_block',  // List all ingredients
    ]
  )
})