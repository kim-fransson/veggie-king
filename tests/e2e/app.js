describe('Navbar link navigation', function () {
  before((browser) => {
    browser.init()
  })

  it('navigate to about us section', function () {
    browser.element.findByText('about us').click()
    browser.element.findByText('About Us').assert.visible()
  })

  it('navigate to menu section', function () {
    browser.element.findByText('menu').click()
    browser.element.findByText('Menu').assert.visible()
  })

  it('navigate to contact section', function () {
    browser.element.findByText('contact').click()
    browser.element.findByText('Contact').assert.visible()
  })

  after((browser) => browser.end())
})
