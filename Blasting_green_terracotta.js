ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:green_glazed_terracotta',  // output item
    'minecraft:green_terracotta'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})