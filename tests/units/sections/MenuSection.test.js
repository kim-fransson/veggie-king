import MenuSection from '@/sections/MenuSection.vue'
import { render } from '@testing-library/vue'

test('render', () => {
  const { getByText, getByAltText } = render(MenuSection)

  getByText('Menu')
  getByText('Explore our best food')
  getByText('Below you can see our best selling meals!')

  getByAltText(/.*burgers.*?/)
  getByAltText(/.*salad.*?/)
  getByAltText(/.*wrap.*?/)
})
