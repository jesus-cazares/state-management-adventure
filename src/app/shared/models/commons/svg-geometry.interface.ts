export interface ISvgSide {
    key: string;
    value: string;
}

export interface ISvgGeometry {
    id: string;
    serialNumber: string;
    name: string;
    category: string;
    variableExpression: string;
    parameterList: Array<string>
    svgSides: Array<ISvgSide>
}
