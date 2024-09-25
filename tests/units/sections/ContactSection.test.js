import ContactSection from '@/sections/ContactSection.vue'
import { render } from '@testing-library/vue'

test('render', () => {
  const { getByText, getByAltText } = render(ContactSection)

  getByText('Contact')
  getByText("We're waiting for you!")

  getByText('Today 12 pm - 9pm')
  getByText('3883 Rupert St, Vancouver')
  getByText('(604) 569-2198')
})
