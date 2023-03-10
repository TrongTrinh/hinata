/*
Commit message format:

'<type>(<scope>): <module> - <subject>'

Max length: 100

Type:

feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing or correcting existing tests
chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation

Scope:

assets:   Changes to icons / images / other media files, folder assets or public/*
nav:      Changes to navigation, does not affect meaning of internal logic
state:    Changes to reducers, sagas
domain:   Changes to domain, typscript logic, folder/* includes are type, interface, schema 
lib:      Changes to application usecase logic
view:  Changes to UI Components / UI styles, folder: components and page/*
services: Changes to various app services (data provider, push, caching, etc..)
setup:    Changes to app configuration (npm packages, react, helpers,utils, etc..)

module: Name of page or feature
subject: Description
*/

// Example: feat(screen): homepage - implement banner section

module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(.*)\((.*)\):\s(.*)\s-\s(.*)$/,
            headerCorrespondence: ['type', 'scope', 'module', 'subject'],
        },
    },
    rules: {
        'header-max-length': [2, 'always', 100],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert']],
        'scope-enum': [2, 'always', ['assets', 'models', 'nav', 'state', 'domain', 'lib', 'view', 'services', 'setup']],
    },
    ignores: [(commit) => commit.slice(0, 3) === 'WIP'],
};
