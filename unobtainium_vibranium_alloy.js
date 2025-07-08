ServerEvents.recipes(event => {

  // adds a recipe that smelts a allthemodium ingot, a vibranium ingot, and an unobtainium ingot into a vibranium-unobtainium alloy ingot
  // energy usage of 10000
  // experience of 3
  // uses chaining functions for energy and experience
  event.recipes.enderio.alloy_smelting(
      Item.of("allthemodium:unobtainium_vibranium_alloy_ingot"),
      [Ingredient.of("allthemodium:allthemodium_ingot"), "allthemodium:vibranium_ingot", "allthemodium:unobtainium_ingot"]
  ).energy(10000).experience(3);
});