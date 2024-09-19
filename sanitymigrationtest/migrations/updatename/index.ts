import { defineMigration, set } from "sanity/migrate";

export default defineMigration({
    title: 'updatename',
    documentTypes: ['person'],
    migrate: {
        string(node, path, context) {
            return set('hello')
        },
    }
})