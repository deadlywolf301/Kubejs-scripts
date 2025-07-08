// Shapeless crafting recipe template

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('minecraft:netherite_ingot', 1), // output item with count
    [
      'minecraft:gold_ingot',  // List all ingredients
      'minecraft:netherite_scrap'
    ]
  )
})