import HeroSection from '@/sections/HeroSection.vue'
import { render } from '@testing-library/vue'

test('render', () => {
  const { getByText, getByAltText } = render(HeroSection)

  getByText('Healthy & Fresh Food For You')
  getByText('Created for lovers of healthy, delicious and non-obvious food.')
  getByText('Check menu')

  getByAltText(/chillies.*?/)
  getByAltText(/bowl.*?/)
})
