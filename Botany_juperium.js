ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        "ad_extendra:juperium_ingot", // seed item
        ["ad_extendra:juperium_block"], // categories that this crop can be planted on
        { block: "ad_extendra:jupiter_juperium_ore" }, // display block
        [
            Item.of("ad_extendra:juperium_ingot") // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(2, 4) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        200, // growthTicks
        1, // optional, growthModifier - this can be set to 1 in most cases
    )

    event.recipes.botanypots.soil(
        "ad_extendra:juperium_block", // the item that this soil is attached to
        { block: "ad_extendra:juperium_block" }, // display block
        ["ad_extendra:juperium_block"], // categories that this soil provides
        100, // growth ticks that this soil will provide, set to -1 for no modifier
        0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
    )

    event.recipes.botanypots.fertilizer(
        "minecraft:iron_ingot", // fertilizer item
        30, // min growth ticks applied
        40 // max growth ticks applied
        // ex: 10 to 20 ticks will be randomly given to the crop
    )
})

// fired everytime a crop grows
BotanyPotsEvents.onCropGrow(event => {
    // event.random : the random object associated with the event
    // event.crop : a crop object describing the crop grown, use ProbeJS to find the specifics
    // event.originalDrops : an array of items this crop drops
    // event.drops : a writable array that changes the drops of the crop
    console.log([event.random, event.crop, event.originalDrops, event.drops].join(','))
})