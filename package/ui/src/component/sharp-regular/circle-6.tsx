
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=sharp-regular circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-96-48c0-31.7 11.9-62.3 33.3-85.7L261.4 128l65.1 0-14.9 16.2-44.4 48.4C315 198.2 352 238.8 352 288c0 53-43 96-96 96s-96-43-96-96z" />
    </Icon>
);

export default Circle_6;