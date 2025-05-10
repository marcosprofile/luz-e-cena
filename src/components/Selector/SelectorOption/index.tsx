import { SelectionOptionProps } from "../../../types/selection.types"


const SelectorOption = ({label, value, ...rest}: SelectionOptionProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

export default SelectorOption