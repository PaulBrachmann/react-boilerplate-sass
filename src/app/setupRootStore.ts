import { init as initI18n } from "../i18n";
import RootStoreModel from "../models";

export { RootStoreModel };

/** The RootStore's instance type. */
export type RootStore = typeof RootStoreModel.Type;

/** The RootStore's snapshot. */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;

/** Sets up the root state. */
export default async function setupRootStore() {
  let rootStore: RootStore;

  const env = await createEnvironment();
  rootStore = RootStoreModel.create({}, env);

  return rootStore;
}

/**
 * Sets up the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  // allow each service to setup
  await initI18n();

  return {};
}
