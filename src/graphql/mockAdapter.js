import { DefaultAdapter, ConnectionMode } from '@vuex-orm/plugin-graphql';

export default class mockAdapter extends DefaultAdapter {
  getConnectionMode() {
		return ConnectionMode.PLAIN
	}
}
