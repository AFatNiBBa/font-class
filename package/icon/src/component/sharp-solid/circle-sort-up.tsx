
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=sharp-solid circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-64l0 32 224 0 0-32L256 96 144 192zm0 96l0 32 112 96 112-96 0-32-32 0-160 0-32 0zm112 85.9L193.2 320l125.7 0L256 373.9z" />
    </Icon>
);

export default CircleSortUp;