
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-duotone-solid circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM130.9 128l59.8 0c21.8 29.3 43.5 58.5 65.3 87.8L321.3 128l59.8 0L285.9 256l95.2 128-59.8 0L256 296.2 190.7 384l-59.8 0c31.7-42.7 63.5-85.3 95.2-128L130.9 128z" />
        <path d="M321.3 128l59.8 0L285.9 256l95.2 128-59.8 0L256 296.2 190.7 384l-59.8 0 95.2-128L130.9 128l59.8 0L256 215.8 321.3 128z" />
    </Icon>
);

export default CircleX;