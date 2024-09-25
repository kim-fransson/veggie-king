import AboutUsSection from '@/sections/AboutUsSection.vue'
import { render } from '@testing-library/vue'

test('render', () => {
  const { getByText, getByAltText } = render(AboutUsSection)

  getByText('About Us')
  getByText('Few words about us')
  getByText(
    'We are not ordinary food truck. We create a place overflowing with positive energy that it expresses important to us values. Get to know them specifically.'
  )

  getByAltText(/bowl.*?/)
})
