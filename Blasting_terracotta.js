ServerEvents.recipes(event => {
  event.blasting(
    'minecraft:terracotta',  // output item
    'minecraft:clay'   // input item
  ).xp(0.7)                  // optional: set XP
   .cookingTime(50)          // optional: cook time in ticks (100 = 5 seconds)
})