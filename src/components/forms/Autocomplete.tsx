import React from 'react';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';
import { Control, Controller, FieldPath, FieldValues, Path } from 'react-hook-form';

interface AutocompleteSelectorProps extends Omit<AutocompleteProps<string, false, false, false>, 'renderInput'> {
  name: string;
  label: string;
  options:any
}

export function RHFAutocompleteSelector({
  name,
  label,
  options,
  ...autocompleteProps
}: AutocompleteSelectorProps) {
  return (

        <Autocomplete
          {...autocompleteProps}
          options={options}
        //   onChange={(event, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
    
  );
}