const formFields = [
  {
    key: "1",
    type: "text",
    id: "name",
    placeholder: "Name",
    label: "Enter your name",
    pattern: new RegExp(/^[a-zA-Z]/gi),
  },
  {
    key: "2",
    type: "text",
    id: "surename",
    placeholder: "Surename",
    label: "Enter your surename",
    pattern: new RegExp(/^[a-zA-Z]/gi),
  },
  {
    key: "3",
    type: "text",
    id: "favouriteColor",
    placeholder: "Favourite color",
    label: "Enter your favourite color",
    pattern: new RegExp(/^[a-zA-Z]/gi),
  },
  {
    key: "4",
    type: "number",
    id: "age",
    placeholder: "Age",
    label: "Enter your age",
    pattern: null,
  },
  {
    key: "5",
    type: "email",
    id: "email",
    placeholder: "Email",
    label: "Enter your email",
    pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
  },
  {
    key: "6",
    type: "radio",
    id: "gender",
    label: "You are a",
    placeholder: "",
    pattern: null,
  },
  {
    key: "7",
    type: "checkbox",
    id: "subscribe",
    label: "Tick for notifications",
    placeholder: "",
    pattern: null,
  },
];

export default formFields;