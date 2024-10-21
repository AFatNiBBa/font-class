
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=duotone circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0c-13.3 0-24-10.7-24-24l0-208zm48 24l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0c-13.3 0-24-10.7-24-24l0-208zm48 24l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
    </Icon>
);

export default CircleD;