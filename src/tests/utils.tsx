/* eslint-disable import/no-extraneous-dependencies */
import { render } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const handlers = [
  rest.get("*/all*", (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        name: "John Doe",
      }),
    ),
  ),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: ReactNode) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <BrowserRouter>
      <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
    </BrowserRouter>,
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactNode) =>
      rerender(
        <BrowserRouter>
          <QueryClientProvider client={testQueryClient}>
            {rerenderUi}
          </QueryClientProvider>
        </BrowserRouter>,
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return function ({ children }: { children: ReactNode }) {
    return (
      <BrowserRouter>
        <QueryClientProvider client={testQueryClient}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    );
  };
}
