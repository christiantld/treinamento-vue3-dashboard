import {
  validateEmptyAndLength5,
  validateEmptyAndEmail
} from '@/utils/validators'

describe('Validate Empty and Length 5', () => {
  it('It should give an error with empty payload', () => {
    expect(validateEmptyAndLength5()).toBe('*Este campo é obrigatório')
  })

  it('It should give an error with less than 3 characters payload', () => {
    expect(validateEmptyAndLength5('12')).toBe(
      '*Este campo precisa de no mínimo 3 caracteres'
    )
  })

  it('It should return true when input pass a correct param', () => {
    expect(validateEmptyAndLength5('123')).toBe(true)
  })
})

describe('Validate Empty And Email', () => {
  it('It should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('It should give an error with payload is not an email format', () => {
    expect(validateEmptyAndEmail('emailinvalido@')).toBe(
      '*Este campo precisa ser um e-mail'
    )
  })

  it('It should return true when email is a valid format', () => {
    expect(validateEmptyAndEmail('email@teste.com')).toBe(true)
  })
})
