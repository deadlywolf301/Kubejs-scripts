// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:netherite_scrap', 1), // output item with count
    [
      'minecraft:coal',  // List all ingredients
      'minecraft:lapis_lazuli',
    ]
  )
})