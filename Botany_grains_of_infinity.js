ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        "enderio:grains_of_infinity", // seed item
        ["enderio:reinforced_obsidian_block"], // categories that this crop can be planted on
        { block: "minecraft:bedrock" }, // display block
        [
            Item.of ("enderio:grains_of_infinity") // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(1, 3) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        120, // growthTicks
        1, // optional, growthModifier - this can be set to 1 in most cases
    )

    event.recipes.botanypots.soil(
        "enderio:reinforced_obsidian_block", // the item that this soil is attached to
        { block: "enderio:reinforced_obsidian_block" }, // display block
        ["enderio:reinforced_obsidian_block"], // categories that this soil provides
        100, // growth ticks that this soil will provide, set to -1 for no modifier
        0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
    )

    event.recipes.botanypots.fertilizer(
        "minecraft:iron_ingot", // fertilizer item
        30, // min growth ticks applied
        40 // max growth ticks applied
        // ex: 30 to 40 ticks will be randomly given to the crop
    )
})

// fired everytime a crop grows
BotanyPotsEvents.onCropGrow(event => {
    // event.random : the random object associated with the event
    // event.crop : a crop object describing the crop grown
    // event.originalDrops : an array of items this crop drops
    // event.drops : a writable array that changes the drops of the crop
    console.log([event.random, event.crop, event.originalDrops, event.drops].join(","))
})