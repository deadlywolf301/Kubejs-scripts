// Shaped crafting recipe template

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('allthemodium:alloy_paxel', 1), // output item with count
    [
      'ABC', // crafting pattern (3x3 grid)
      ' D ', // A, B, C, etc. represent items in the pattern
      ' D '
    ],
    {
      B: 'allthemodium:alloy_shovel',  // A = allthemodium alloy shovel
      D: 'allthemodium:allthemodium_rod',  // B = allthemodium rod
      A: 'allthemodium:alloy_pick',  // C = allthemodium alloy pick
      C: 'allthemodium:alloy_axe',  // D = allthemodium alloy axe
      
    }
  )
})