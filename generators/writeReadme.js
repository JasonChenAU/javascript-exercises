const { writeFile } = require("fs/promises");
const { join } = require("path");
const { splithirectoryName } = require("./helpers");

async function writeReadme(exercisePath) {
  const { exerciseNumber, exerciseName } = splithirectoryName(exercisePath);
  const readmeContent = `# Exercise ${exerciseNumber} - ${exerciseName}

Description of the exercise goes here.
`;

  await writeFile(join(exercisePath, "README.md"), readmeContent);
}

module.exports = { writeReadme };
