import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'directus-labs-multilevel-api-autocomplete-interface',
	name: 'Mutlilevel Autocomplete',
	icon: 'box',
	description: 'Get data from nested API queries',
	component: InterfaceComponent,
	options: null,
	types: ['string'],
});
