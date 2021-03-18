export const addFont = (font: string = 'Regular') => `

@font-face {
    src: url(./Poppins/Poppins-${font}.ttf);
    font-family:  Poppins-${font};
}

font-family:  Poppins-${font};
`;

export const addFlexbox = (
  dir: string = 'row',
  align: string = 'center',
  justify: string = 'center'
) => `

    display:flex;
    flex-direction: ${dir};
    align-items: ${align};
    justify-content: ${justify};

`;

export const btnReset = () => `
outline: none;
border: none;
`;
