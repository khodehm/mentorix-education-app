/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        "vazir-md" : ["vazir-md","sanserif"],
        "vazir-th" : ["vazir-th","sanserif"],
        "vazir-rg" : ["vazir-rg","sanserif"],
        "vazir-blod" : ["vazir-bold","sanserif"],
        "vazir-smb" : ["vazir-smb","sanserif"],

      },

      colors:{
        bg1:"#ebebeb",
        bg2:"#ffffff",
        bg3:"#f5f5f5",
        bg4:"#dddddd",
        text1:"#212121",
        text2:"#666666",
        main: '#00b4d8',
        secondary: '#0077b6',
        tabBtn: '#eff3fe',
        text1: '#747575',
        text2: '#eaeded',
        lightText: '#a6a7a7', 
        border: '#ebebeb',
        light: '#fff',
        black: '#000',
        bg1: '#fff',
        bg2: '#f5f7f7',
        bg3: '#eaeded',

      },
      borderRadius: {
        mainRadius: '10px',
      },
      borderWidth:{
        1:"1px",
      },
      screens: {
        "usm":"350px",
        "xsm": "375px",
  
        "sm": "640px",
  
        "md": "768px",
  
        "lg": "1024px",
  
        "xl": "1280px",
  
        "2xl": "1536px",
      },


    },
  },
  plugins: [],
}

