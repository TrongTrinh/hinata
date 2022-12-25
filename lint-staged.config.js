module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

    // // Lint then format TypeScript and JavaScript files
    // '**/*.(ts|tsx|js)': (filenames) => [
    //     `cd landing/ && yarn lint:fix ${filenames.join(' ')}`,
    //     `cd landing/ && yarn format:fix`,
    // ],

    // // Format MarkDown and JSON
    // '**/*.(md|json)': (filenames) => `cd landing/ && yarn format:fix`,
};
