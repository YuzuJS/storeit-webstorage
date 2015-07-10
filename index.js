"use strict";

var Storeit = require("storeit");
var StoreitProvider = require("storeit-provider-webstorage");
var StoreitSerializer = require("storeit-serializer-json");

function storeitFactory(namespace, storage) {
    var jsonSerializer = new StoreitSerializer(); // Create a JSON serializer.

    var providerOptions = { // Create a WebStorage provider using the specified storage type.
        localOrSessionStorage: storage,
        preferredItemSerializerName: jsonSerializer.name,
        metadataSerializerName: jsonSerializer.name,
        allSerializers: [jsonSerializer]
    };
    var storageProvider = new StoreitProvider(providerOptions);

    return new Storeit(namespace, storageProvider);
}

exports.StoreitLocal = function (namespace) {
    return storeitFactory(namespace, global.localStorage);
};

exports.StoreitSession = function (namespace) {
    return storeitFactory(namespace, global.sessionStorage);
};
