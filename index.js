exports.defineTags = function(dictionary) {
    dictionary.defineTag('signal', {
        mustHaveValue: false,
        onTagged: function(doclet, tag) {
            doclet.signal = true;
            doclet.reactive = true;
            const reactiveDescription = `**@signal**: Indicates that this function, variable, or property is reactive. It is the same as a @reactive, meaning that it will be tracked as a dependency inside of effect contexts.`;
            doclet.description = (doclet.description || '') + '\n\n' + reactiveDescription;
        }
    });
};
