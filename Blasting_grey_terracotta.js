ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:grey_glazed_terracotta',  // output item
    'minecraft:grey_terracotta'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})