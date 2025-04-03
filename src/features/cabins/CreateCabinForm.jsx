import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm, useFormState } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";

const Label = styled.label`
  font-weight: 500;
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries(["cabins"]);
      reset();
    },
    onError: (err) => toast.err(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image.at(0) });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="text"
          id="maxCapacity"
          {...register("maxCapacity", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="text"
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="text"
          id="discount"
          defaultValue={0}
          {...register("discount", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          type="text"
          id="description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="'image/*"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
