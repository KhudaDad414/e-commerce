import fs from 'fs';
import path from 'path';

export const generateOpenApiSpec = (specs: object) => {
  const outputPath = path.resolve(__dirname, '../../openapi.json');
  fs.writeFileSync(outputPath, JSON.stringify(specs, null, 2));
  return outputPath;
};
