const config = {
  modulePaths: ['<rootDir>/src/'],
  reporters: [ 
    "default", 
    ["jest-junit", {
      outputDirectory: 'reports',
      outputName: 'junit.xml',
    }]
  ],
};

module.exports = config;
