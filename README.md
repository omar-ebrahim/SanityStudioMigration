# SanityStudioMigration

Created using

```
npm create sanity@latest -- --project PROJECTID --dataset DATASET --template clean
```

To run the migration

`cd sanitymigrationtest`

and then ensure that the dataset is commented out in `sanity.cli.ts`

```typescript
export default defineCliConfig({
  api: {
    projectId: 'c53pjo6p',
    /**
     * comment out this line to see the error
     */
    // dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
```

`npx sanity migration run updatename`

# Description of the issue

```
Project id:  c53pjo6p
Dataset:     ~dummy-placeholder-dataset-
HTTPError: Dataset alias not found: Dataset alias "dummy-placeholder-dataset-" not found for project ID "c53pjo6p"
```

**NOTE** the error is correct, but the error is not clear that the dataset is missing.

Here's the line of code in `sanity/packages/@sanity/cli/src/util
/clientWrapper.ts`\
https://github.com/sanity-io/sanity/blob/4729e84b8f08d4598f3502d54a484430cfdc5bb7/packages/%40sanity/cli/src/util/clientWrapper.ts#L112

This should probably be checked instead of giving a default value