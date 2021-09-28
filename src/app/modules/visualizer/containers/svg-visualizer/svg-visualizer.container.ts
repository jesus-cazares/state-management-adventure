import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { VisualizerState } from "src/app/modules/visualizer/state";
import { ISvgElement } from "src/app/shared/models/commons/svg-element.interface";
import * as visualizerSelectors from "src/app/modules/visualizer/state/selectors/svg-visualizer.selectors";
import * as visualizerActions from "src/app/modules/visualizer/state/actions/svg-visualizer.actions";

@Component({
    selector: 'app-svg-visualizer-container',
    templateUrl: './svg-visualizer.container.html'
})
export class SvgVisualizerContainer implements OnInit {
    svgElements$!: Observable<Array<ISvgElement>>;
    section = 'shaft';
    elements: Array<ISvgElement>;

    constructor(private store: Store<VisualizerState>){
        this.elements = [{
            svg: `<svg
            width="210mm"
            height="297mm"
            viewBox="0 0 210 297">
            <g transform="translate(-18.500495,-9.001648)">
                <rect
                    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
                    id="@@selection@@"
                    width="61.7584"
                    height="24.729456"
                    x="51.453121"
                    y="75.840385" />
                <rect
                    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
                    id="shaft-section-1"
                    width="10.187182"
                    height="16.90019"
                    x="41.265942"
                    y="79.544556" />
                <rect
                    style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-opacity:1"
                    id="shaft-section-2"
                    width="10.187182"
                    height="16.90019"
                    x="113.47343"
                    y="79.586098" />
                <path
                    style="fill:none;stroke:#000000;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.265, 0.53;stroke-dashoffset:0;stroke-opacity:1"
                    d="m 36.148086,87.284403 93.896854,0.661244"
                    id="path1865" />
            </g>
        </svg>`,
        selected: false,
        ready: false
        },
    {
        svg: `
        <svg width="210mm" height="297mm" viewBox="0 0 210 297">
            <rect
                style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                id="@@selection@@"
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
        </svg>`,
        selected: false,
        ready: false
    }];

    }

    ngOnInit(): void {
        this.store.dispatch(visualizerActions.clearSection({ section: this.section }));
        this.svgElements$ = this.store.select(visualizerSelectors.selectSvgVisualizerState);
        this.store.dispatch(visualizerActions.addSvg({
            svg: this.elements[0].svg,
            section: this.section
        }));
    }

    /**
     * Select
     * 
     * @summary emmits dispatch when an element is selected
     * @param index : number
     * @returns void
     */
    select(index: number): void {
        this.store.dispatch(visualizerActions.selectSvg({
            selected: true,
            section: this.section,
            index
        }));
    }

    /**
     * Remove
     * 
     * @summary emmits dispatch when an element is removed
     * @param index : number
     * @returns void
     */
    remove(index: number): void {
        this.store.dispatch(visualizerActions.removeSvg({
            section: this.section,
            index
        }));
    }
}
