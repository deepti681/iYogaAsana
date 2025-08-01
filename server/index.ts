import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function startNextJS() {
  console.log('🚀 Starting Next.js development server...');
  
  try {
    // Start Next.js development server
    const nextProcess = exec('npx next dev --port 5000', {
      cwd: process.cwd()
    });

    nextProcess.stdout?.on('data', (data) => {
      console.log(data.toString().trim());
    });

    nextProcess.stderr?.on('data', (data) => {
      console.error(data.toString().trim());
    });

    nextProcess.on('close', (code) => {
      console.log(`Next.js process exited with code ${code}`);
      process.exit(code || 0);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\nGracefully shutting down Next.js server...');
      nextProcess.kill('SIGINT');
    });

    process.on('SIGTERM', () => {
      console.log('\nGracefully shutting down Next.js server...');
      nextProcess.kill('SIGTERM');
    });

  } catch (error) {
    console.error('Failed to start Next.js server:', error);
    process.exit(1);
  }
}

startNextJS();