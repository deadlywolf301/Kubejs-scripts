// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:ender_pearl', 2), // output item with count
    [
      'minecraft:redstone',  // List all ingredients
      'minecraft:amethyst_shard'
    ]
  )
})