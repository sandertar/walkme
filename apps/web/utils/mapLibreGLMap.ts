import { LngLatLike, Map, Popup, Marker, LngLatBounds } from 'maplibre-gl';
import { GeoJSONFeature, LngLat } from 'types';
import LinePattern from '@assets/images/line-pattern.png';

export class MapLibreGLMap extends Map {
  #markers: { points: Marker[] };
  constructor(options) {
    super(options);
    this.#markers = { points: [] };
  }
  addLine(feature: GeoJSONFeature, options: { showMarkers: boolean } = { showMarkers: true }) {
    return this.loadImage(LinePattern.src, (err, image) => {
      this.addImage('pattern', image);
      this.addSource('path', {
        type: 'geojson',
        data: feature,
      });
      this.addLayer({
        id: 'path',
        type: 'line',
        source: 'path',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#06b0ff',
          'line-width': 8,
          'line-pattern': 'pattern',
        },
      });
      if (options.showMarkers) {
        const popupStart = new Popup({ closeButton: false }).setHTML('Start');
        new Marker({ color: '#FF0000' })
          .setLngLat([feature.geometry.coordinates[0][0], feature.geometry.coordinates[0][1]])
          .setPopup(popupStart)
          .addTo(this)
          .togglePopup();
        const popupEnd = new Popup({ closeButton: false }).setHTML('Finish');
        new Marker({ color: '#FFF000' })
          .setLngLat([feature.geometry.coordinates.at(-1)[0], feature.geometry.coordinates.at(-1)[1]])
          .setPopup(popupEnd)
          .addTo(this)
          .togglePopup();
      }
    });
  }
  fitFeatureBounds(feature: GeoJSONFeature, padding: number = 60) {
    const coordinates = feature.geometry.coordinates;
    // Create a 'LngLatBounds' with both corners at the first coordinate.
    const bounds = new LngLatBounds();
    for (const coord of coordinates) {
      bounds.extend(coord as LngLatLike);
    }
    return this.fitBounds(bounds, {
      padding,
    });
  }
  // add custom method to control markers
  addMarker(lngLat: LngLat, color: string = '#FF0000', layerId: string = 'points') {
    const marker = new Marker({ color }).setLngLat(lngLat).addTo(this);
    this.#markers[layerId] = this.#markers[layerId] || [];
    this.#markers[layerId].push(marker);
  }
  // remove all markers from map for a given layer
  removeAllMarkers(layerId: string = 'points') {
    this.#markers[layerId].forEach((marker) => marker.remove());
    this.#markers[layerId] = [];
  }
}
