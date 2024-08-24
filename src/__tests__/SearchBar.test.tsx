import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';  // Adjust the import path as needed

describe('SearchBar', () => {
  it('renders the search input with the correct initial value', () => {
    const mockSetSearchQuery = vi.fn();
    render(<SearchBar searchQuery="initial query" setSearchQuery={mockSetSearchQuery} />);

    // Check if the input field is rendered with the correct initial value
    const inputElement = screen.getByLabelText('Search');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('initial query');
  });

  it('calls setSearchQuery with the correct value when the user types', async () => {
  const mockSetSearchQuery = vi.fn();
  render(<SearchBar searchQuery="" setSearchQuery={mockSetSearchQuery} />);

  const inputElement = screen.getByLabelText('Search');

  // Simulate typing into the input field
  await userEvent.type(inputElement, 'test input');

  const expectedCalls = ['t', 'e', 's', 't', ' ', 'i', 'n', 'p', 'u', 't'];

  expectedCalls.forEach((call, index) => {
    expect(mockSetSearchQuery).toHaveBeenNthCalledWith(index + 1, call);
  });
});



    it('updates the search input value as the user types', async () => {
    let searchQuery = "initial";
    const mockSetSearchQuery = vi.fn((newValue) => {
        searchQuery = newValue; // Simulate state update
    });

    const { rerender } = render(
        <SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} />
    );

    const inputElement = screen.getByLabelText('Search');

    // Simulate typing into the input field
    const typedText = 'new query';
    await userEvent.type(inputElement, typedText);

    // Iterate over each character typed and rerender the component
    for (let i = 0; i < typedText.length; i++) {
        searchQuery = `initial${typedText.slice(0, i + 1)}`; // Construct expected query
        rerender(<SearchBar searchQuery={searchQuery} setSearchQuery={mockSetSearchQuery} />);

        // Check if the setSearchQuery function was called with the correct value
        expect(mockSetSearchQuery).toHaveBeenNthCalledWith(i + 1, `initial${typedText[i]}`);
    }

    // Final check to ensure the input value matches the expected result
    expect(inputElement).toHaveValue(`initial${typedText}`);
    });


});
