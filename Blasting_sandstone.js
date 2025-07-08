ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:smooth_sandstone',  // output item
    'minecraft:sandstone'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})