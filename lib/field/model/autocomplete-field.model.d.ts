import { Field } from './field.model';
import { DropdownOption } from './dropdown-option.model';
import { Observable } from 'rxjs';
export declare const enum AutocompleteDiaplyType {
    AUTOCOMPLETE = "AUTOCOMPLETE",
    CHIP = "CHIP"
}
export interface AutocompleteField extends Field {
    keyword: string;
    options: Array<DropdownOption>;
    resolveOptionWithKey?: string;
    optionDependsOn?: string;
    minLengthForTrigger: number;
    displayType?: AutocompleteDiaplyType;
    noRecordFound?: string;
}
export interface AutoCompleteOptionFunction {
    (options?: Array<DropdownOption>): Observable<Array<DropdownOption>>;
}
