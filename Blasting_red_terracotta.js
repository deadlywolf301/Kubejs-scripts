ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:red_glazed_terracotta',  // output item
    'minecraft:red_terracotta'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})