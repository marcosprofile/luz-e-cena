import SelectorGroup from "../../Selector/SelectorGroup"
import SelectorOption from "../../Selector/SelectorOption"

import { FaLocationDot } from "react-icons/fa6"

const cidades = [
  { id: 1, nome: "São Paulo"},
  { id: 1, nome: "Rio de Janeiro"},
  { id: 1, nome: "Belo Horizonte"},
  { id: 1, nome: "Curitiba"},
  { id: 1, nome: "Porto Alegre"},
]


const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectorOption value="" label="Escolha sua cidade..." />
        {cidades.map((cidade) => {
          return (
            <SelectorOption key={cidade.id} value={cidade.nome} label={cidade.nome} />
          )
        })}
      </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters