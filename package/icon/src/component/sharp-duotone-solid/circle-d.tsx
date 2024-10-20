
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=sharp-duotone-solid circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24zm48 48l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
        <path d="M160 128l24 0 72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24zm48 48l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
    </Icon>
);

export default CircleD;