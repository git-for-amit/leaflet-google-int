///<reference types="leaflet"/>

declare namespace L.gridLayer {
    interface GoogleMutant extends GridLayer {
        setElementSize(e, size);
        addGoogleLayer(googleLayerName:string, options);
        removeGoogleLayer(googleLayerName:string)
    }

    interface GoogleMutantOptions extends GridLayerOptions {
        subdomains?: string,
        errorTileUrl?: string,
        continuousWorld?: boolean,
        // 🍂option type: String = 'roadmap'
        // Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
        type: string,
    }

    function googleMutant(options: GoogleMutantOptions): GoogleMutant;
}