import { Component, Mixin } from 'src/core/shopware';
import CriteriaFactory from 'src/core/factory/criteria.factory';
import template from './sw-settings-language-list.html.twig';
import './sw-settings-language-list.less';

Component.register('sw-settings-language-list', {
    template,

    mixins: [
        Mixin.getByName('sw-settings-list')
    ],

    data() {
        return {
            entityName: 'language',
            sortBy: 'language.name',
            defaultLanguageIds: ['20080911ffff4fffafffffff19830531', '00e84bd18c574a6ca748ac0db17654dc'],
            filterRootLanguages: false
        };
    },

    computed: {
        filters() {
            return [{
                active: false,
                label: this.$tc('sw-settings-language.list.textFilterRootLanguages'),
                criteria: { type: 'equals', field: 'language.parentId', options: null }
            }, {
                active: false,
                label: this.$tc('sw-settings-language.list.textFilterInheritedLanguages'),
                criteria: { type: 'not', field: 'and', options: CriteriaFactory.equals('language.parentId', null) }
            }];
        },
        expandButtonClass() {
            return {
                'is--hidden': this.expanded
            };
        },
        collapseButtonClass() {
            return {
                'is--hidden': !this.expanded
            };
        }
    },

    methods: {
        isDefault(id) {
            return this.defaultLanguageIds.includes(id);
        },

        getItemParent(item) {
            if (item.parentId === null) {
                return { name: '-' };
            }

            return this.store.getById(item.parentId);
        },

        onChangeRootFilter(value) {
            this.filterRootLanguages = value === true;

            this.getList();
        }
    }
});
