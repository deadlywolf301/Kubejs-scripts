ServerEvents.recipes(event => {
  // adds a recipe that mills a netherite ingot into four netherite scrap
  // uses default values for energy and bonus type
  event.recipes.enderio.sag_milling(["netherite_scrap", "netherite_scrap", "netherite_scrap", "netherite_scrap"], "netherite_ingot");
});