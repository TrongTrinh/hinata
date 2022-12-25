module.exports = {
    important: true,
    content: ['./lib/view/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        // textColor: false,
    },
    theme: {
        container: {
            padding: '1.5rem',
        },
        screens: {
            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1200px',
        },
        fontFamily: {
            nato: ['Noto Sans JP, sans-serif'],
            jost: ['Jost, sans-serif'],
        },
        colors: {
            'suva-grey': '#898786',
            white: '#ffffff',
            black: '#000000',
            eclipse: '#3E3A39',
            'white-smoke': '#f3f3f3',
            transparent: 'transparent',
            tundora: '#585655',
        },
        fontSize: {
            1: '1rem',
            1.2: '1.2rem',
            1.3: '1.3rem',
            1.4: '1.4rem',
            1.5: '1.5rem',
            1.6: '1.6rem',
            1.8: '1.8rem',
            2: '2rem',
            2.2: '2.2rem',
            2.4: '2.4rem',
            2.6: '2.6rem',
            2.8: '2.8rem',
            3: '3rem',
            3.2: '3.2rem',
            3.4: '3.4rem',
            3.6: '3.6rem',
            3.8: '3.8rem',
            4: '4rem',
            4.2: '4.2rem',
            4.4: '4.4rem',
            4.5: '4.5rem',
            4.6: '4.6rem',
            4.8: '4.8rem',
        },
        spacing: {
            0: '0rem',
            0.2: '0.2rem',
            0.3: '0.3rem',
            0.4: '0.4rem',
            0.5: '0.5rem',
            0.6: '0.6rem',
            0.7: '0.7rem',
            0.8: '0.8rem',
            0.9: '0.9rem',
            1: '1rem',
            1.2: '1.2rem',
            1.4: '1.4rem',
            1.5: '1.4rem',
            1.6: '1.6rem',
            1.8: '1.8rem',
            2: '2rem',
            2.2: '2.2rem',
            2.4: '2.4rem',
            2.5: '2.5rem',
            2.6: '2.6rem',
            2.8: '2.8rem',
            3: '3rem',
            3.2: '3.2rem',
            3.4: '3.4rem',
            3.5: '3.5rem',
            3.6: '3.6rem',
            3.8: '3.8rem',
            4: '4rem',
            4.2: '4.2rem',
            4.4: '4.4rem',
            4.6: '4.6rem',
            4.8: '4.8rem',
            5.0: '5.0rem',
        },
        boxShadow: {
            'black-0.5': '1px 1px 3px rgba(0, 0, 0, 0.5)',
            'black-0.1': '4px 2px 4px rgba(0, 0, 0, 0.1)',
            'search-box': '4px 6px 7px 0px #00000033',
        },
        // extend: {
        //     fontSize: {
        //         3.25: '13px',
        //         3.75: '15px',
        //         4.25: '17px',
        //         8: '32px',
        //         5.5: '22px',
        //         10: '40px',
        //     },
        //     height: {
        //         12.5: '50px',
        //         17: '68px',
        //         25: '100px',
        //         26: '104px',
        //         15: '60px',
        //         17.5: '70px',
        //     },
        //     width: {
        //         17: '68px',
        //         25: '100px',
        //     },
        //     lineHeight: {
        //         7.5: '30px',
        //     },
        //     padding: {
        //         3.5: '14px',
        //         4.25: '17px',
        //         4.5: '18px',
        //         5.5: '22px',
        //         6.5: '26px',
        //         7: '28px',
        //         7.5: '30px',
        //         12.5: '50px',
        //         13: '52px',
        //         22.5: '90px',
        //         17.5: '70px',
        //         25: '100px',
        //     },
        //     margin: {
        //         3.5: '14px',
        //         3.7: '15px',
        //         4.5: '18px',
        //         5.5: '22px',
        //         6.5: '26px',
        //         7: '28px',
        //         7.5: '30px',
        //         8.5: '34px',
        //     },
        //     borderRadius: {
        //         5: '20px',
        //         7.5: '30px',
        //     },
        // },
    },
    plugins: [],
};