
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=sharp-duotone-solid circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-70.7 57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l-32 35.8C295.2 183.7 276.5 176 256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L280 280l-24 0 0-48 24 0 80 0 24 0 0 24c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L280 280l-24 0 0-48 24 0 80 0 24 0 0 24c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l-32 35.8C295.2 183.7 276.5 176 256 176z" />
    </Icon>
);

export default CircleG;