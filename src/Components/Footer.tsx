import styled from 'styled-components';
import { colours, mediaQueries, sizes } from "../Assets/Style/style";

// styled components
const FooterContainer = styled.div`
    padding: 0 3em;
    height: ${sizes.footerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${mediaQueries.mobile} {
      flex-direction: column-reverse;
      padding: 1em;
      font-size: .75em
    }
`
const GitHub = styled.a`
    color: ${colours.white};
    margin-right: 0.5em;
    & svg {
        transition: 500ms;
    }
    & svg:hover {
        color: ${colours.neonGreen};
        box-shadow: 0 0 1em ${colours.neonGreen};
        transform: rotate(45deg);
    }
`
const LinkedIn = styled.a`
    color: ${colours.galaxyBlue};
    margin-left: 0.5em;
    margin-right: 0.5em;
    & svg {
        transition: 500ms;
    }    
    & svg:hover {
        color: ${colours.neonGreen};
        box-shadow: 0 0 1em ${colours.neonGreen};
        transform: rotate(-45deg);
    }
`

const Mastodon = styled.a`
    color: ${colours.ultraViolet};
    margin-left: 0.5em;
    & svg {
        transition: 500ms;
    }    
    & svg:hover {
        color: ${colours.neonGreen};
        box-shadow: 0 0 1em ${colours.neonGreen};
        transform: rotate(45deg);
        border-radius: 50%;
    }
`;

function Footer() {
    const currentDate = new Date();

    return (
        <FooterContainer>
            <div>
                <p style={{ fontWeight: "lighter" }}>&copy; Simon Tirant - {currentDate.getFullYear()}</p>
            </div>

            <div>
                <p style={{ fontWeight: "lighter" }}>Follow me on:</p>

                <div style={{ textAlign: "center" }}>
                    <GitHub href="https://github.com/Sancxo" target="_blank" rel="noreferrer" title="GitHub">
                        <svg style={{ borderRadius: "50%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1" width="34" height="34">
                            <title>GitHub</title>
                            <g>
                                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </g>
                        </svg>
                    </GitHub>

                    <LinkedIn href="https://www.linkedin.com/in/simontirant/" target="_blank" rel="noreferrer" title="Linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                            <title>LinkedIn</title>
                            <g>
                                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                            </g>
                        </svg>
                    </LinkedIn>

                    <Mastodon rel="me" href="https://mastodon.social/@sancxo">
                        <svg width="34" height="34" viewBox="0 0 74 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-20 max-w-full" >
                            <path d="M73.7014 17.9592C72.5616 9.62034 65.1774 3.04876 56.424 1.77536C54.9472 1.56019 49.3517 0.7771 36.3901 0.7771H36.2933C23.3281 0.7771 20.5465 1.56019 19.0697 1.77536C10.56 3.01348 2.78877 8.91838 0.903306 17.356C-0.00357857 21.5113 -0.100361 26.1181 0.068112 30.3439C0.308275 36.404 0.354874 42.4535 0.91406 48.489C1.30064 52.498 1.97502 56.4751 2.93215 60.3905C4.72441 67.6217 11.9795 73.6395 19.0876 76.0945C26.6979 78.6548 34.8821 79.0799 42.724 77.3221C43.5866 77.1245 44.4398 76.8953 45.2833 76.6342C47.1867 76.0381 49.4199 75.3714 51.0616 74.2003C51.0841 74.1839 51.1026 74.1627 51.1156 74.1382C51.1286 74.1138 51.1359 74.0868 51.1368 74.0592V68.2108C51.1364 68.185 51.1302 68.1596 51.1185 68.1365C51.1069 68.1134 51.0902 68.0932 51.0695 68.0773C51.0489 68.0614 51.0249 68.0503 50.9994 68.0447C50.9738 68.0391 50.9473 68.0392 50.9218 68.045C45.8976 69.226 40.7491 69.818 35.5836 69.8087C26.694 69.8087 24.3031 65.6569 23.6184 63.9285C23.0681 62.4347 22.7186 60.8764 22.5789 59.2934C22.5775 59.2669 22.5825 59.2403 22.5934 59.216C22.6043 59.1916 22.621 59.1702 22.6419 59.1533C22.6629 59.1365 22.6876 59.1248 22.714 59.1191C22.7404 59.1134 22.7678 59.1139 22.794 59.1206C27.7345 60.2936 32.799 60.8856 37.8813 60.8843C39.1036 60.8843 40.3223 60.8843 41.5447 60.8526C46.6562 60.7115 52.0437 60.454 57.0728 59.4874C57.1983 59.4628 57.3237 59.4416 57.4313 59.4098C65.3638 57.9107 72.9128 53.2051 73.6799 41.2895C73.7086 40.8204 73.7803 36.3758 73.7803 35.889C73.7839 34.2347 74.3216 24.1533 73.7014 17.9592ZM61.4925 47.6918H53.1514V27.5855C53.1514 23.3526 51.3591 21.1938 47.7136 21.1938C43.7061 21.1938 41.6988 23.7476 41.6988 28.7919V39.7974H33.4078V28.7919C33.4078 23.7476 31.3969 21.1938 27.3894 21.1938C23.7654 21.1938 21.9552 23.3526 21.9516 27.5855V47.6918H13.6176V26.9752C13.6176 22.7423 14.7157 19.3795 16.9118 16.8868C19.1772 14.4 22.1488 13.1231 25.8373 13.1231C30.1064 13.1231 33.3325 14.7386 35.4832 17.9662L37.5587 21.3949L39.6377 17.9662C41.7884 14.7386 45.0145 13.1231 49.2765 13.1231C52.9614 13.1231 55.9329 14.4 58.2055 16.8868C60.4017 19.3772 61.4997 22.74 61.4997 26.9752L61.4925 47.6918Z" fill="inherit" />
                        </svg>
                    </Mastodon>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;