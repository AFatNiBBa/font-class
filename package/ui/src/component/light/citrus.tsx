
import { Icon } from "../../index";

/**
 * A component that renders the `citrus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=light citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 96c35.3 0 64-28.7 64-64l-64 0c-35.3 0-64 28.7-64 64l64 0zm0 32l-80 0c-8.8 0-16-7.2-16-16l0-16c0-10 1.5-19.7 4.4-28.8c-11.8-2.1-24-3.2-36.4-3.2C141.1 64 48 157.1 48 272s93.1 208 208 208s208-93.1 208-208c0-44.3-13.9-85.5-37.5-119.2c10.3-3.6 20-8.5 28.9-14.5C481 176.5 496 222.5 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272S123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0l80 0c8.8 0 16 7.2 16 16l0 16c0 53-43 96-96 96z" />
    </Icon>
);

export default Citrus;