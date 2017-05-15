import { createSelector } from 'reselect';

const appSelector = (state: any) => state.app;

export default createSelector(
  appSelector,
  (app) => ({
    appName: app.name,
  }),
);
