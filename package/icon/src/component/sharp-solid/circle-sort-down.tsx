
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=sharp-solid circle-sort-down}
 * @preview ![circle-sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-sort-down.svg)
 */
const CircleSortDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM144 320l0-32 224 0 0 32L256 416 144 320zm0-96l0-32L256 96l112 96 0 32-32 0-160 0-32 0zm112-85.9L193.2 192l125.7 0L256 138.1z" />
    </Icon>
);

export default CircleSortDown;