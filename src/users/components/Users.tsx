import { useForm } from "react-hook-form";
import { Schema, schema } from "../types/schema";
import { Stack, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../components/forms/TextInput";
import { MySelector, RHFAutocompleteSelector } from "../../components/forms/RHFAutocomplete";
type FormValues = {
  name: string;
  email: string;
  country: object | null;
};

const data = [
  { id: 1, label: "USA" },
  { id: 2, label: "Pakitan" },
  { id: 3, label: "UAE" },
];

const Users = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<FormValues>({
    defaultValues: {
      name: "Talha",
      email: "talha@gmail.com",
      country: null,
    },
    mode: "all",
    // resolver: zodResolver(schema),
  });

  console.log("Values ->", getValues());
  console.log("Erros ->", errors);
  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextInput
            {...register("name", {
              required:true,
              maxLength:20
            })}
            label="Name"
            errors={errors}
            // helperText={errors.name?.message}
          />
          <TextField
            {...register("email")}
            label="Email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          {/* <RHFAutocompleteSelector
          name="country"
            label="Country"
            control={control}
            options={data}
            isOptionEqualToValue={(option:any, value:any)=> option.label === value.label}
            // get
          /> */}
          {/* <Autocomplete /> */}
          <MySelector
          name="country"
          control={control}
          options={data}
          label="Hey"
          />
        </Stack>
      </form>
    </div>
  );
};

export default Users;
