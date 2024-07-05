import React, { FC } from 'react';
import { Autocomplete, TextField, AutocompleteProps as test } from '@mui/material';
import { Control, Controller, FieldPath, FieldValues, Path } from 'react-hook-form';
import type { AutoCompleteProps,MyAutocompleteSelectorProps } from './types';

interface AutocompleteSelectorProps<T extends FieldValues> extends Omit<test<string, false, false, false>, 'renderInput'> {
  name: FieldPath<T>;
  label: string;
  control: Control<T>;
  options:any
}

export const RHFAutocompleteSelector  = <ElementType extends FieldValues>({
  name,
  label,
  control,
  options,
  ...autocompleteProps
}: AutocompleteSelectorProps<ElementType>)=> {
  return (
    <Controller
      name={name}
      control={control}
      rules={{required:true}}
      render={({ field, fieldState: { error } }) => {
        console.log("field", field)
        return (
          <Autocomplete
          {...field}
          {...autocompleteProps}
          options={options}
          onChange={(event, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
            {...params}
            label={label}
            error={!!error}
            helperText={error?.message}
            />
          )}
          />
        )
      }}
    />
  );
}


export const MySelector =<T extends FieldValues> (props:MyAutocompleteSelectorProps<T>)=>{
  const {name , control,options, label, ...autocompleteProps} = props
return (
  <>
      <Controller
      name={name}
      control={control}
      rules={{required:true}}
      render={({ field, fieldState: { error } }) => {
        console.log("field", field)
        return (
          <Autocomplete
          {...field}
          {...autocompleteProps}
          options={options}
          onChange={(event, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
            {...params}
            label={label}
            error={!!error}
            helperText={error?.message}
            />
          )}
          />
        )
      }}
    />
  </>
)
}