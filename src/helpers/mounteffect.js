import { useEffect } from 'react';

export const useMountEffect = (callbackfn) => useEffect(callbackfn, [])