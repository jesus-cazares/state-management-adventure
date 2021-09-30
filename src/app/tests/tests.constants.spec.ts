import { ISvgGeometry } from "../shared/models/commons/svg-geometry.interface";

export class TestsConstants {
    static readonly geometryExample: ISvgGeometry = {
        id: 'ABCD',
        serialNumber: 'XXXXXX',
        name: 'shafSection',
        category: 'shaftSection',
        variableExpression: '@@var1@@',
        parameterList: [],
        svgSides: [],
    };
    static readonly responseAllGeometries = [];
    static readonly expectedGeometries = [];
}
