const actualConfig = jest.requireActual('../../config/config');

export const history = { push: jest.fn() };
export const baseHref = actualConfig.baseHref;