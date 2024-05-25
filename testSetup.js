import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as matchers from "@testing-library/jest-dom/matchers";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})