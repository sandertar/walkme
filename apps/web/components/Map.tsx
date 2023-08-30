'use client';

import { useEffect, useRef } from 'react';
import { Bounds, LngLat, GeoJSONFeatureCollection } from 'types';

import { MapLibreGLMap } from '@utils';

interface Props {
  points?: {
    slug: string;
    label?: string;
    coordinates: LngLat;
  }[];
  zoom: number;
  center: LngLat;
  bounds?: Bounds;
  geoJSON?: GeoJSONFeatureCollection;
  onDragEnd?: (bounds: Bounds, zoom: number) => void;
  onZoomEnd?: (bounds: Bounds, zoom: number) => void;
  onLoad?: () => void;
}

export function Map({
  center,
  bounds,
  zoom,
  points = [],
  geoJSON,
  onDragEnd = (): void => {},
  onZoomEnd = (): void => {},
  onLoad = (): void => {},
}: Props): JSX.Element {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // init map when component mounts
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    map.current = new MapLibreGLMap({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'basic-tiles': {
            type: 'raster',
            url: `https://api.mapy.cz/v1/maptiles/outdoor/tiles.json?apikey=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'tiles',
            type: 'raster',
            source: 'basic-tiles',
          },
        ],
      },
      center,
      bounds,
      zoom,
    });
    map.current.on('dragend', () => {
      onDragEnd(map.current.getBounds(), map.current.getZoom());
    });
    map.current.on('zoomend', () => {
      onZoomEnd(map.current.getBounds(), map.current.getZoom());
    });
    map.current.on('load', () => {
      onLoad();
      geoJSON?.features.forEach((feature) => {
        if (feature.geometry.type === 'LineString') {
          map.current.addLine(feature);
          map.current.fitFeatureBounds(feature);
        }
      });
    });
  }, [center, zoom, geoJSON, onDragEnd, onZoomEnd, onLoad, bounds]);
  // add points to map
  useEffect(() => {
    if (!map.current) return;
    // points necessary to be removed before adding new ones because we fetch new points on every map move
    map.current.removeAllMarkers();
    points.forEach((point) => {
      map.current.addMarker(point.coordinates);
    });
  }, [points]);
  return <div ref={mapContainer} className="map h-full" />;
}
