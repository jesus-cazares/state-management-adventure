import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import * as fromBearing from 'src/app/modules/bearing-editor/state/reducers/bearing-svg.reducer';
import { IError } from "src/app/shared/models/commons/error.interface";
import { IBearingType } from "../../models/bearing-type.interface";

declare var Snap: any;

@Component({
    selector: 'ng-editor',
    templateUrl: './editor.html'
})

export class EditorComponent implements OnInit {
    @Input() svgLoading?: boolean;
    @Input() svgString?: string;
    @Input() error?: IError;

    @Input() types!: Array<IBearingType> | null;
    @Input() loadingTypes!: boolean | null;

    svg: any;
    getSvg = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
        this.svg = Snap('#svg');
        const id = 'base';
        const extElement = `<svg
        width="210mm"
        height="297mm"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg5"
        inkscape:version="1.1 (c68e22c387, 2021-05-23)"
        sodipodi:docname="base.svg"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
    <sodipodi:namedview
        id="namedview7"
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1.0"
        inkscape:pageshadow="2"
        inkscape:pageopacity="0.0"
        inkscape:pagecheckerboard="0"
        inkscape:document-units="mm"
        showgrid="false"
        inkscape:zoom="0.97035431"
        inkscape:cx="393.67064"
        inkscape:cy="228.26714"
        inkscape:window-width="1366"
        inkscape:window-height="705"
        inkscape:window-x="-8"
        inkscape:window-y="-8"
        inkscape:window-maximized="1"
        inkscape:current-layer="layer1" />
    <defs
        id="defs2" />
    <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1">
        <g
            id="g1951"
            transform="translate(-18.500495,-9.001648)">
        <rect
            style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
            id="rect198"
            width="61.7584"
            height="24.729456"
            x="51.453121"
            y="75.840385" />
        <rect
            style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
            id="rect198-3"
            width="10.187182"
            height="16.90019"
            x="41.265942"
            y="79.544556" />
        <rect
            style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
            id="rect198-3-9"
            width="10.187182"
            height="16.90019"
            x="113.47343"
            y="79.586098" />
        <path
            style="fill:none;stroke:#000000;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.265, 0.53;stroke-dashoffset:0;stroke-opacity:1"
            d="m 36.148086,87.284403 93.896854,0.661244"
            id="path1865" />
        </g>
    </g>
    </svg>`;
    this.appendElement(extElement, id);
    }

    appendShaft(): void {
        const id = 'shaft';
        const extElement = `<svg
        width="210mm"
        height="297mm"
        color="red"
        viewBox="0 0 210 297"
        >
    
        <rect
            style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2019"
            width="9.5617132"
            height="44.754475"
            x="41.745182"
            y="56.745293" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.158326;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366"
            width="7.5292583"
            height="1.7377067"
            x="42.719318"
            y="57.27446" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.158326;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0"
            width="7.5292583"
            height="1.7377067"
            x="42.719318"
            y="60.070499" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6"
            width="7.453321"
            height="3.8431034"
            x="42.757286"
            y="62.904507" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6-3"
            width="7.453321"
            height="3.8431034"
            x="42.757286"
            y="68.335114" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6-8"
            width="7.453321"
            height="3.8431034"
            x="42.859222"
            y="80.283875" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6-6"
            width="7.453321"
            height="3.8431034"
            x="42.859222"
            y="91.674248" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.158326;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-7"
            width="7.5292583"
            height="1.7377067"
            x="42.783283"
            y="96.575684" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.158326;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-2"
            width="7.5292583"
            height="1.7377067"
            x="42.783283"
            y="99.371727" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6-0"
            width="7.453321"
            height="3.8431034"
            x="42.859222"
            y="86.243645" />
        <rect
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.234263;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
            id="rect2366-0-6-39"
            width="7.453321"
            height="3.8431034"
            x="42.757286"
            y="74.294884" />
    </svg>`; 
        this.appendElement(extElement, id, true);
    }

    private appendElement(svgString: string, id: string, includeEvents = false): void {
        const svg = Snap.parse(svgString);
        const selection = this.svg.group().append(svg);

        if (includeEvents) {
        selection.drag();
        selection.node.onclick = this.clickShaft.bind(this, selection);
        selection.node.onmouseenter = this.enterShaft.bind(this, selection);
        selection.node.onmouseleave = this.leaveShaft.bind(this, selection);
        selection.node.ondblclick = this.dblClick.bind(this, selection);
        }
    }

    private clickShaft(selection: any) {
        selection.attr({ stroke: 'black', 'strokeWidth': 0.5, fill: 'black' });
    }

    private dblClick(selection: any): void {
        selection.remove();
    }

    private enterShaft(selection: any) {
        selection.attr({ opacity: "0.5" });
    }

    private leaveShaft(selection: any) {
        selection.attr({ opacity: "1" });
    }
    
}