
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=sharp-thin circle-sort-down}
 * @preview ![circle-sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-sort-down.svg)
 */
const CircleSortDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm345.4-48L256 118.6 166.6 208 144 208 244.7 107.3 256 96l11.3 11.3L368 208l-22.6 0zM160 304l0 8.6 96 82.3 96-82.3 0-8.6-192 0zm-16 16l0-16 0-16 16 0 192 0 16 0 0 16 0 16L256 416 144 320z" />
    </Icon>
);

export default CircleSortDown;