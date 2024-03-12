import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutUs from '../Components/AboutUs'

describe('AboutUs Component', () => {
  beforeEach(() => {
    render(<AboutUs />)
  })

  it('renders the main header correctly', () => {
    expect(
      screen.getByText('A complete desk at your disposal'),
    ).toBeInTheDocument()
  })

  it('renders the correct caption', () => {
    expect(
      screen.getByText('Stay on top of your events, goals and daily routine'),
    ).toBeInTheDocument()
  })

  it('renders service headers and captions correctly', () => {
    const headers = [
      'Everything You Need In One Place',
      'Experience Nature At Its Best',
      'Get An Overview Of All nature focused events',
      'Work With Any Team, In Any Event',
    ]

    const captions = [
      'Event Manager takes care of all your hobbies and leisure time.',
      'Collaborate with the team, have fun and communicate effectively with others.',
      'Keep everything in one place. Set short-term or long-term goals and increase productivity by categorizing events and setting deadlines.',
      'It does not matter if you are a beginner in camping or hiking; Event Manager is an ideal tool for you of all sizes.',
    ]

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument()
    })

    captions.forEach((caption) => {
      expect(screen.getByText(caption)).toBeInTheDocument()
    })
  })

  it('renders icons correctly', () => {
    // Test if icons are rendered by checking the presence of their containers
    const iconContainers = screen.getAllByRole('link') // assuming each icon is wrapped in an <a> tag
    expect(iconContainers.length).toBe(4) // Expecting 4 icons based on the component structure
  })
})
