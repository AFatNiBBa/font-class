
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-regular shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M350.1 33.9L384 0l33.9 33.9 60.1 60.1L512 128l-33.9 33.9-35.5 35.5c-17 17-40 26.5-64 26.5c-16.3 0-31.6-4.3-44.7-11.8L233 313l37.1 37.1L304 384l-33.9 33.9L176 512 48 512 0 512l0-48L0 336l94.1-94.1L128 208l33.9 33.9L199 279 299.8 178.2C292.3 165 288 149.8 288 133.5c0-24 9.5-47 26.5-64l35.5-35.5zM444.1 128L384 67.9l-35.5 35.5c-8 8-12.5 18.8-12.5 30.1c0 23.5 19 42.5 42.5 42.5c11.3 0 22.1-4.5 30.1-12.5L444.1 128zM48 464l108.1 0 80-80L128 275.9l-80 80L48 464z" />
    </Icon>
);

export default Shovel;