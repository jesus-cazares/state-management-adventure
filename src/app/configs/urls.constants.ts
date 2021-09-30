export class UrlsConstants {
    // Geometries
    static readonly baseGeometriesUrl = 'https://syberliteapp-svg-api.azurewebsites.net/api/svg_library';
    static readonly geometryByIdUrl = `${UrlsConstants.baseGeometriesUrl}`;
    static readonly geometryByCategoryUrl = `${UrlsConstants.baseGeometriesUrl}/category`;
    static readonly allGeometries = `${UrlsConstants.baseGeometriesUrl}`;
    static readonly saveGeometryUrl = `${UrlsConstants.baseGeometriesUrl}`;
}
