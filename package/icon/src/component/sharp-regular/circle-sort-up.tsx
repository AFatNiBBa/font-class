
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=sharp-regular circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-64L256 96l112 96 0 32-224 0 0-32zm0 96l32 0 160 0 32 0 0 32L256 416 144 320l0-32zm112 85.9L318.8 320l-125.7 0L256 373.9z" />
    </Icon>
);

export default CircleSortUp;