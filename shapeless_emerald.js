// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:emerald', 1), // output item with count
    [
      'minecraft:ender_pearl',  // List all ingredients
      'minecraft:amethyst_shard'
    ]
  )
})