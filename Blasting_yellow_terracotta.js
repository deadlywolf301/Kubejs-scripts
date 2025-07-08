ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:yellow_glazed_terracotta',  // output item
    'minecraft:yellow_terracotta'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})
