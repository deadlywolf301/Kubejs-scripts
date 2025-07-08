ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:black_glazed_terracotta',  // output item
    'minecraft:black_terracotta'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})