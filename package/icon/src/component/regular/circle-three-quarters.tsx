
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=regular circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 304c-26.5 0-48-21.5-48-48l0-202.4C116.3 75.2 48 157.7 48 256c0 114.9 93.1 208 208 208c98.3 0 180.8-68.3 202.4-160L256 304zM224.1 2C241.6-.2 256 14.3 256 32l0 176 0 48 48 0 176 0c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512C114.6 512 0 397.4 0 256C0 125.4 97.8 17.7 224.1 2z" />
    </Icon>
);

export default CircleThreeQuarters;