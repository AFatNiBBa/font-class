
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=sharp-regular circle-sort-down}
 * @preview ![circle-sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-sort-down.svg)
 */
const CircleSortDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM144 320l112 96 112-96 0-32-224 0 0 32zm0-96l32 0 160 0 32 0 0-32L256 96 144 192l0 32zm112-85.9L318.8 192l-125.7 0L256 138.1z" />
    </Icon>
);

export default CircleSortDown;