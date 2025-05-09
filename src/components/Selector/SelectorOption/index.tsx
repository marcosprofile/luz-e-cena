interface SelectionOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}


const SelectorOption = ({label, value, ...rest}: SelectionOption) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

export default SelectorOption