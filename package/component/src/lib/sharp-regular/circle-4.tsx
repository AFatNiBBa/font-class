
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=sharp-regular circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320-64l0 24 0 56 8 0 24 0 0 48-24 0-8 0 0 40 0 24-48 0 0-24 0-40-96 0-31.6 0 8.5-30.4L197.8 128l49.8 0-40 144 64.4 0 0-56 0-24 48 0z" />
    </Icon>
);

export default Circle_4;