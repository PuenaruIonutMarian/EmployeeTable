import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Compter from '../components/Compter';
import { JSX } from 'react/jsx-runtime';

const renderCompter = (props: JSX.IntrinsicAttributes & { currentPage: number; rowsPerPage: number; totalEntries: number; }) => render(<Compter {...props} />);

const assertParagraphContent = (paragraph: HTMLParagraphElement | null, start: string | RegExp, end: string | RegExp, total: string | RegExp) => {
  expect(paragraph).toHaveTextContent('Showing');
  expect(paragraph).toHaveTextContent(start);
  expect(paragraph).toHaveTextContent('to');
  expect(paragraph).toHaveTextContent(end);
  expect(paragraph).toHaveTextContent('of');
  expect(paragraph).toHaveTextContent(total);
  expect(paragraph).toHaveTextContent('entries');
};

describe('Compter Component', () => {
  it('should display the correct range of entries for the first page', () => {
    const { container } = renderCompter({ currentPage: 1, rowsPerPage: 10, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '10', '25');
  });

  it('should display the correct range of entries for the second page', () => {
    const { container } = renderCompter({ currentPage: 2, rowsPerPage: 10, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '11', '20', '25');
  });

  it('should handle a case where the total entries are less than the rows per page', () => {
    const { container } = renderCompter({ currentPage: 1, rowsPerPage: 10, totalEntries: 5 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '5', '5');
  });

  it('should handle the case where the total entries fit exactly in the rows per page', () => {
    const { container } = renderCompter({ currentPage: 1, rowsPerPage: 5, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '5', '25');
  });

  it('should display the correct range when the current page is the last page', () => {
    const { container } = renderCompter({ currentPage: 3, rowsPerPage: 10, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '21', '25', '25');
  });

  // Edge cases
  it('should handle edge case where currentPage is less than 1', () => {
    const { container } = renderCompter({ currentPage: -1, rowsPerPage: 10, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '10', '25');
  });

  it('should handle edge case where rowsPerPage is less than 1', () => {
    const { container } = renderCompter({ currentPage: 1, rowsPerPage: -1, totalEntries: 25 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '1', '25');
  });

  it('should handle edge case where totalEntries is 0', () => {
    const { container } = renderCompter({ currentPage: 1, rowsPerPage: 10, totalEntries: 0 });
    const paragraph = container.querySelector('p');
    assertParagraphContent(paragraph, '1', '0', '0');
  });

});
