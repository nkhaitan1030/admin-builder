import { OnChanges, ComponentRef, ViewContainerRef, Compiler } from '@angular/core';
export declare class cfTemplateDirective implements OnChanges {
    private vcRef;
    private compiler;
    cfTemplate: string;
    cfTemplateContext: any;
    componentRef: ComponentRef<any>;
    constructor(vcRef: ViewContainerRef, compiler: Compiler);
    ngOnChanges(): void;
    updateProperties(): void;
    private createDynamicComponent;
    private createDynamicModule;
}
