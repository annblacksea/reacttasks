import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
	console.log('MODE:', mode); // для проверки
	return {
		plugins: [react()],
	};
});
