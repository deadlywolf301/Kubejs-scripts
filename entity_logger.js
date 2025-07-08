  const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  const entityTypeRegistry = BuiltInRegistries.ENTITY_TYPE;
  // Java collection iterator
  const entityKeysIterator = entityTypeRegistry.keySet().iterator();
  const allEntityIDs = [];
  // Iterate manually
  while (entityKeysIterator.hasNext()) {
    let keying = entityKeysIterator.next();
    allEntityIDs.push(keying.toString());
  }