
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=regular ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 128c0 42.3 22.6 78.9 50.5 107.6c10.3 10.6 20.6 19.4 29.5 26.3c8.9-6.9 19.3-15.7 29.5-26.3C217.4 206.9 240 170.3 240 128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM98.9 272C66 238.9 32 189.8 32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 61.8-34 110.9-66.9 144l74.9 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168L24 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l74.9 0z" />
    </Icon>
);

export default Ankh;