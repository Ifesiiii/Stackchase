/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Hanken Grotesk']
            },
            backgroundImage: {
                'bg-hero': "url('../assets/img/Background.png')"
            }
        },
    },
    plugins: [],
}