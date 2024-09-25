import NavigationBar from '@/components/NavigationBar.vue'
import { render } from '@testing-library/vue'

test('render', () => {
  const { getByText } = render(NavigationBar)

  // assert output
  getByText('about us')
  getByText('menu')
  getByText('contact')
})
