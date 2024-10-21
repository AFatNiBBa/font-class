
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=light cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 244l0 12L32 256c0-9.3 4.6-18 12.4-23.1L295.7 65.3c1.3-.8 2.8-1.3 4.3-1.3c99.4 0 180 80.6 180 180zM32 288l448 0 0 128c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-128zm480-32l0-12c0-117.1-94.9-212-212-212c-7.8 0-15.5 2.3-22 6.7L26.6 206.2C10 217.3 0 236 0 256L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-160z" />
    </Icon>
);

export default Cheese;