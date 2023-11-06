/**
 * MIT License
 *
 * Copyright (c) 2023 Josef Barnes
 *
 * testSetup.ts: This file contains the setup code for vitest
 */

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
   /* Make sure tests cleanup after they run */
   cleanup();
});
