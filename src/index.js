"use strict";

module.exports = {
	Client: require("./Client"),
	Options: require("./Options"),
	Util: require("./Util"),
	// Managers
	BaseManager: require("./managers/BaseManager"),
	ResourceManager: require("./managers/ResourceManager"),
	NamedResourceManager: require("./managers/NamedResourceManager"),
	LanguageManager: require("./managers/LanguageManager"),
	MachineManager: require("./managers/MachineManager"),
	BerryManager: require("./managers/berries/BerryManager"),
	BerryFirmnessManager: require("./managers/berries/BerryFirmnessManager"),
	BerryFlavorManager: require("./managers/berries/BerryFlavorManager"),
	ContestTypeManager: require("./managers/contests/ContestTypeManager"),
	ContestEffectManager: require("./managers/contests/ContestEffectManager"),
	SuperContestEffectManager: require("./managers/contests/SuperContestEffectManager"),
	EncounterMethodManager: require("./managers/encounters/EncounterMethodManager"),
	EncounterConditionManager: require("./managers/encounters/EncounterConditionManager"),
	EncounterConditionValueManager: require("./managers/encounters/EncounterConditionValueManager"),
	EvolutionChainManager: require("./managers/evolution/EvolutionChainManager"),
	EvolutionTriggerManager: require("./managers/evolution/EvolutionTriggerManager"),
	GenerationManager: require("./managers/games/GenerationManager"),
	PokedexManager: require("./managers/games/PokedexManager"),
	VersionManager: require("./managers/games/VersionManager"),
	VersionGroupManager: require("./managers/games/VersionGroupManager"),
	ItemManager: require("./managers/items/ItemManager"),
	ItemAttributeManager: require("./managers/items/ItemAttributeManager"),
	ItemCategoryManager: require("./managers/items/ItemCategoryManager"),
	ItemFlingEffectManager: require("./managers/items/ItemFlingEffectManager"),
	ItemPocketManager: require("./managers/items/ItemPocketManager"),
	LocationManager: require("./managers/locations/LocationManager"),
	LocationAreaManager: require("./managers/locations/LocationAreaManager"),
	PalParkAreaManager: require("./managers/locations/PalParkAreaManager"),
	RegionManager: require("./managers/locations/RegionManager"),
	MoveManager: require("./managers/moves/MoveManager"),
	MoveAilmentManager: require("./managers/moves/MoveAilmentManager"),
	MoveBattleStyleManager: require("./managers/moves/MoveBattleStyleManager"),
	MoveCategoryManager: require("./managers/moves/MoveCategoryManager"),
	MoveDamageClassManager: require("./managers/moves/MoveDamageClassManager"),
	MoveLearnMethodManager: require("./managers/moves/MoveLearnMethodManager"),
	MoveTargetManager: require("./managers/moves/MoveTargetManager"),
	PokemonManager: require("./managers/pokemon/PokemonManager"),
	AbilityManager: require("./managers/pokemon/AbilityManager"),
	CharacteristicManager: require("./managers/pokemon/CharacteristicManager"),
	EggGroupManager: require("./managers/pokemon/EggGroupManager"),
	GenderManager: require("./managers/pokemon/GenderManager"),
	GrowthRateManager: require("./managers/pokemon/GrowthRateManager"),
	NatureManager: require("./managers/pokemon/NatureManager"),
	PokeathlonStatManager: require("./managers/pokemon/PokeathlonStatManager"),
	PokemonColorManager: require("./managers/pokemon/PokemonColorManager"),
	PokemonFormManager: require("./managers/pokemon/PokemonFormManager"),
	PokemonHabitatManager: require("./managers/pokemon/PokemonHabitatManager"),
	PokemonLocationAreaManager: require("./managers/pokemon/PokemonLocationAreaManager"),
	PokemonShapeManager: require("./managers/pokemon/PokemonShapeManager"),
	PokemonSpeciesManager: require("./managers/pokemon/PokemonSpeciesManager"),
	StatManager: require("./managers/pokemon/StatManager"),
	TypeManager: require("./managers/pokemon/TypeManager")
};