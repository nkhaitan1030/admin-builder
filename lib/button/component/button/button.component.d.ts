import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Button, ObjectTree, HoverButton, ButtonGroup } from '../../model';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormDiaplyMode } from '../../../form/model';
import { Ability } from '@casl/ability';
export declare class ButtonComponent implements OnInit, OnDestroy {
    dialog: MatDialog;
    private router;
    private route;
    private ability;
    form: FormGroup;
    formDisplayMode: FormDiaplyMode;
    sourceIdentifier: string;
    sourceIndex: number;
    widgetArrayIndex: number;
    identifier: string;
    context: any;
    originalData: any;
    label: string;
    buttonRoute: Array<string>;
    parentHierarchy: ObjectTree;
    disabled: boolean;
    onClick: EventEmitter<any>;
    onIconClick: EventEmitter<any>;
    _button: Button | ButtonGroup | HoverButton;
    get button(): Button | ButtonGroup | HoverButton;
    set button(_button: Button | ButtonGroup | HoverButton);
    routerLink: any[];
    displayButton: boolean;
    isButtonDisabled: boolean;
    isDisplayOnlyIcon: boolean;
    hasIconDisplay: boolean;
    isFlatButton: boolean;
    isGhostButton: boolean;
    isRaisedButton: boolean;
    isStrokedButton: boolean;
    isFabButton: boolean;
    isChip: boolean;
    isLink: boolean;
    isGroupButton: boolean;
    isMenuButton: boolean;
    buttonWithoutPadding: boolean;
    formSubscription: Subscription;
    constructor(dialog: MatDialog, router: Router, route: ActivatedRoute, ability: Ability);
    ngOnInit(): void;
    setButtonDisplay(): void;
    setButtonWithoutPadding(): void;
    setLabel(): void;
    state: boolean;
    click(event: any): void;
    openDialog(event: any): void;
    invokeAction(actionDialog: any, event: any): void;
    iconClick(event: any): void;
    addSearchParamsInUrl(filterData: any): void;
    setButtonEnable(): void;
    setOnlyIconDisplay(): void;
    setIconDisplay(): void;
    setFlatButton(): void;
    setGhostButton(): void;
    setRaisedButton(): void;
    setStrokedButton(): void;
    setFabButton(): void;
    setChip(): void;
    setLink(): void;
    setGroupButton(): void;
    setMenuButton(): void;
    ngOnDestroy(): void;
}