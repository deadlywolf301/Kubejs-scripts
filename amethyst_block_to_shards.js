// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:amethyst_shard', 4), // output item with count
    [
      'minecraft:amethyst_block',  // List all ingredients
    ]
  )
})