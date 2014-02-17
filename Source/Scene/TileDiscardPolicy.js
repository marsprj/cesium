/*global define*/
define([
        '../Core/DeveloperError'
    ], function(
        DeveloperError) {
    "use strict";

    /**
     * A policy for discarding tile images according to some criteria.  This type describes an
     * interface and is not intended to be instantiated directly.
     *
     * @alias TileDiscardPolicy
     * @constructor
     *
     * @see DiscardMissingTileImagePolicy
     * @see NeverTileDiscardPolicy
     */
    var TileDiscardPolicy = function(description) {
        DeveloperError.throwInstantiationError();
    };

    /**
     * Determines if the discard policy is ready to process images.
     * @returns {Boolean} True if the discard policy is ready to process images; otherwise, false.
     */
    TileDiscardPolicy.prototype.isReady = function() {
        DeveloperError.throwInstantiationError();
    };

    /**
     * Given a tile image, decide whether to discard that image.
     *
     * @param {Image|Promise} image An image, or a promise that will resolve to an image.
     *
     * @returns {Boolean} A promise that will resolve to true if the tile should be discarded.
     */
    TileDiscardPolicy.prototype.shouldDiscardImage = function(image) {
        DeveloperError.throwInstantiationError();
    };

    return TileDiscardPolicy;
});