import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UrlsConstants } from 'src/app/configs/urls.constants';
import { ISvgGeometry } from 'src/app/shared/models/commons/svg-geometry.interface';

@Injectable({
    providedIn: 'root'
})
export class SvgGeometriesService {

    constructor(private http: HttpClient) { }

    /**
     * Set Geometry
     * 
     * @summary sets a new geometry
     * @param geometry: ISvgGeometry 
     * @returns Observable<void | never>
     */
    setGeometry(geometry: ISvgGeometry): Observable<void | never> {
        return this.http.post(UrlsConstants.saveGeometryUrl, geometry).pipe(
            map(() => undefined)
        );;
    }

    /**
     * Get All Geometries
     * 
     * @summary get all available geometries
     * @returns  Observable<Array<ISvgGeometry> | never>
     */
    getAllGeometries(): Observable<Array<ISvgGeometry> | never> {
        return this.http.get(UrlsConstants.allGeometries).pipe(
            map(response => response as Array<ISvgGeometry>)
        );
    }

    /**
     * Get Geometry By Id
     * 
     * @summary get a geometry according to certain id
     * @param itemId: string
     * @returns  Observable<ISvgGeometry | never>
     */
    getGeometryById(itemId: string): Observable<ISvgGeometry | never> {
        return this.http.get(`${UrlsConstants.geometryByIdUrl}/${itemId}`).pipe(
            map(response => response as ISvgGeometry)
        );
    }

    /**
     * Get Geometry By Category
     * 
     * @summary get a geometry according to certain category
     * @param categoryId: string
     * @returns  Observable<ISvgGeometry | never>
     */
    getGeometryByCategory(categoryId: string): Observable<ISvgGeometry | never> {
        return this.http.get(`${UrlsConstants.geometryByCategoryUrl}/${categoryId}`).pipe(
            map(response => response as ISvgGeometry)
        );
    }
}
