// Shaped crafting recipe template

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('allthemodium:alloy_shovel', 1), // output item with count
    [
      ' A ', // crafting pattern (3x3 grid)
      ' B ', // A, B, C, etc. represent items in the pattern
      ' B '
    ],
    {
      A: 'allthemodium:unobtainium_vibranium_alloy_ingot',  // A = unobtainium vibranium alloy ingot
      B: 'allthemodium:allthemodium_rod',  // B = allthemodium rod
      
    }
  )
})