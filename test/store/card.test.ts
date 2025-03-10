describe('card', () => {
  it('should create a card with title, body, and isDone properties', () => {
    const id = '1'
    const title = 'Test Title'
    const body = 'Test Body'
    const isDone = false

    const card = { id, title, body, isDone }

    expect(card.id).toBe(id)
    expect(card.title).toBe(title)
    expect(card.body).toBe(body)
    expect(card.isDone).toBe(isDone)
  })

  it('should update the isDone property', () => {
    const card = {
      id: '2',
      title: 'Test Title',
      body: 'Test Body',
      isDone: false,
    }
    card.isDone = true

    expect(card.isDone).toBe(true)
  })
})
