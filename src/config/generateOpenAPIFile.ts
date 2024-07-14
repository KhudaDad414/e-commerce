import fs from 'fs';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import options from './openapi.config';

const generateOpenApiSpec = () => {
  const specs = swaggerJSDoc(options);
  const outputPath = path.resolve(__dirname, '../../openapi.json');
  fs.writeFileSync(outputPath, JSON.stringify(specs, null, 2));
  return outputPath;
};

export default generateOpenApiSpec;
