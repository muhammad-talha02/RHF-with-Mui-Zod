import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material"
import { Control, FieldPath, FieldValues } from "react-hook-form"

export interface MyAutocompleteSelectorProps<T extends FieldValues> extends Omit<MuiAutocompleteProps<string, false, false, false>, 'renderInput'> {
    name: FieldPath<T>;
    label: string;
    control: Control<T>;
    options:any
  }
  

export type AutoCompleteProps<T extends FieldValues> =  Omit<MuiAutocompleteProps<string, false , false, false>, 'renderInput'> & {
name:FieldPath<T>,
control:Control<T>,
label:string
options:any
}