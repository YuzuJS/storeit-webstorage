# storeit-webstorage
One-stop shopping for using `storeit` with `storeit-provider-webstorage` and `storeit-serializer-json`.

For example, to setup a store that uses `sessionStorage`, you can now simply do the following:

```js
var Storeit = require("storeit-webstorage").StoreitLocal;
var groceryStore = new Storeit("grocery");

```

Which is equivalent to:
```js
var Storeit = require("storeit");
var StoreitProvider = require("storeit-provider-webstorage");
var StoreitSerializer = require("storeit-serializer-json");

// Create a JSON serializer.
var jsonSerializer = new StoreitSerializer();

// Create a WebStorage provider that uses sessionStorage. 
var providerOptions = {
    localOrSessionStorage: window.sessionStorage,
    preferredItemSerializerName: jsonSerializer.name,
    metadataSerializerName: jsonSerializer.name,
    allSerializers: [jsonSerializer]
};
var sessionStorageProvider = new StoreitProvider(providerOptions);

// Create a store.
var groceryStore = new Storeit("grocery", sessionStorageProvider);
```

For more information on `storeit` see https://github.com/YuzuJS/storeit
