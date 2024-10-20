
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-duotone-solid circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 0L224 128l32 0 0 80 128 0 0 96-128 0 0 80-32 0L96 256z" />
        <path d="M256 208l0-80-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0z" />
    </Icon>
);

export default CircleLeft;