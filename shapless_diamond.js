// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:diamond', 1), // output item with count
    [
      'minecraft:amethyst_shard',  // List all ingredients
      'minecraft:emerald'
    ]
  )
})