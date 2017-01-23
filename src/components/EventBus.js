/**
 * Created by fisher at 3:14 PM on 11/30/16.
 *
 * This should be replaced by redux and react redux.
 * @see http://redux.js.org/
 */

/**
 * Function to be called when
 */
let initializes = [];

let EventBus = {
	/**
	 * Add on initialize listener.
	 * @param fn Function to be called.
	 */
	addOnInitializedListener: (fn) => {
		initializes.push(fn);
	},
	initializeAll: () => {
		for (let i = 0; i < initializes.length; i++) {
			initializes[i]();
		}
	},
	/**
	 * Called to toggle drawer.
	 */
	onToggleDrawer: null,
	/**
	 * Called when data updated.
	 */
	onNewsesUpdate: null,
	/**
	 * Called to request data.
	 */
	onRefreshData: null,
	/**
	 * Called to show refresh indicator.
	 */
	showRefreshIndicator: null,
	/**
	 * Called to hide refresh indicator.
	 */
	hideRefreshIndicator: null
};
export default EventBus;
