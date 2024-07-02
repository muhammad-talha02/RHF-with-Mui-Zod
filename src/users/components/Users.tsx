import { useForm } from "react-hook-form";
import { Schema, schema } from "../types/schema";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

const Users = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  console.log("Values ->", getValues());
  console.log("Erros ->", errors);
  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField
            {...register("name")}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("email")}
            label="Email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          {/* <Autocomplete /> */}
        </Stack>
      </form>
    </div>
  );
};

export default Users;
