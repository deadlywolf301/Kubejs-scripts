// Shaped crafting recipe template

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('enderio:powered_spawner', 1), // output item with count
    [
      'AEA', // crafting pattern (3x3 grid)
      'BDB', // A, B, C, etc. represent items in the pattern
      'CFC'
    ],
    {
      A: 'enderio:soularium_ingot',  // A = soularium ingot
      B: 'enderio:vibrant_gear',  // B = vibrant bimetal gear
      C: 'enderio:dark_steel_ingot', // C = dark steel ingot
      D: 'enderio:ensouled_chassis', // D = ensouled chassis
      E: 'enderio:z_logic_controller', // E = z logic controller
      F: 'minecraft:wither_skeleton_skull', // F = wither skeleton skull
    }
  )
})