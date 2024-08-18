const model = {
    config: {
        language: 'en',
        theme: 'dark',
        fontSize: 14
    },
    // other properties and methods
};

const config = model.config;

console.log(config); // Output: { language: 'en', theme: 'dark', fontSize: 14 }

// Accessing specific properties
console.log(config.language); // Output: 'en'
console.log(config.theme); // Output: 'dark'
console.log(config.fontSize); // Output: 14
