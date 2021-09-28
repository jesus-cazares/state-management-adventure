import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import * as snapSvg from 'snapsvg';
import { VisulaizerConstants } from 'src/app/configs/visualizer.constants';
import { ISvgElement } from 'src/app/shared/models/commons/svg-element.interface';

declare var Snap: typeof snapSvg;

@Component({
    selector: 'app-svg-visualizer',
    templateUrl: './svg-visualizer.html',
    styles: ['svg { background-color:#e6e6e6 }']
})

export class SvgVisualizerComponent implements OnInit, OnChanges {
    @Input() svgElements!: Array<ISvgElement> | null;
    @Output() onSelect = new EventEmitter<{ index: number }>();
    @Output() onRemove = new EventEmitter<{ index: number }>();
    svg!: snapSvg.Paper;
    selectedAttr = VisulaizerConstants.selectedAttr;
    notSelectedAttr = VisulaizerConstants.notSelectedAttr;
    mouseInAttr = VisulaizerConstants.mouseInAttr;
    mouseOutAttr = VisulaizerConstants.mouseOutAttr;
    baseSelectorId = VisulaizerConstants.baseSelectorId;
    tmknSelector = VisulaizerConstants.tmknSelector;
    selectableId = VisulaizerConstants.selectableId;

    constructor() {}

    ngOnInit(): void {
        this.svg = Snap(`#${ this.baseSelectorId }`);
        this.appendElements(this.svgElements as Array<ISvgElement>);
    }

    ngOnChanges(simpleChanges: SimpleChanges): void {
        if (simpleChanges.svgElements && simpleChanges.svgElements.currentValue) {
            this.appendElements(simpleChanges.svgElements.currentValue);
        }
    }

    /**
     * Draw Elements
     * 
     * @summary adds earch svg element in the received order
     * @param elements: Array<ISvgElement>
     * @returns void
     */
    appendElements(elements: Array<ISvgElement>): void {
        if (this.svg) {
            this.svg.clear();
            elements.forEach((element: ISvgElement, index: number) => this.appendElement(element, index, !element.ready));
        }
    }

    private appendElement(element: ISvgElement, index: number, includeEvents: boolean): void {
        const id = `${ this.tmknSelector }-${ index }`;
        const svg:  snapSvg.Fragment = Snap.parse(element.svg.replace(this.selectableId, `${ id }-selectable`));
        const selection: snapSvg.Element = this.svg.group().append(svg as snapSvg.Element);
        selection.attr({ id });
        
        if (element.selected) {
            this.selectElement(selection);
        }

        if ( includeEvents ) {
            selection.drag();
            selection.click(this.clickElement.bind(this, selection));
            selection.hover(this.mouseInElement.bind(this, selection), this.mouseOutElement.bind(this, selection));
            selection.dblclick(this.dblClickElement.bind(this, selection));    
        }
    }

    private clickElement(selection: snapSvg.Element): void {
        const index = this.getIndex(selection);
        if (!(this.svgElements as Array<ISvgElement>)[index].selected) {
            this.onSelect.emit({ index });
        }
    }

    private dblClickElement(selection: snapSvg.Element): void {
        this.onRemove.emit({ index: this.getIndex(selection) });
    }

    private mouseInElement(selection: snapSvg.Element): void {
        selection.attr(this.mouseInAttr);
    }

    private mouseOutElement(selection: snapSvg.Element): void {
        selection.attr(this.mouseOutAttr);
    }

    private getIndex(selection: snapSvg.Element): number {
        const id = selection.node.getAttribute('id') as string;
        const [,index] = id.split('-');
        return parseInt(index);
    }

    private selectElement(selection: snapSvg.Element): void {
        const idx = this.getIndex(selection);
        const selectableId = `${ this.tmknSelector }-${ idx }-selectable`;
        const selectableElement = this.svg.select(`#${ selectableId }`);
        selectableElement.attr(this.selectedAttr);
    }
}
