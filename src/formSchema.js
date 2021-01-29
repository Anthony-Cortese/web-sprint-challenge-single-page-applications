import * as yup from "yup"
export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(2, 'name is required'),
    email: yup
    .string()
    .email('must be a valid email')
    .required('email is required'),
    size: yup
    .string()
    .oneOf(["small", "medium", "large"], 'size is required'),
    sauce: yup
    .string()
    .oneOf(['red', 'garlic', 'alfredo'], 'sauce is required'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean(),
})