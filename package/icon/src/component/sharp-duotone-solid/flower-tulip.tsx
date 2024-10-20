
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=sharp-duotone-solid flower-tulip}
 * @preview ![flower-tulip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flower-tulip.svg)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 16c0 97.2 78.8 176 176 176l48 0 32 0 32 0 48 0c97.2 0 176-78.8 176-176l0-16-80 0c-59.5 0-112.1 29.5-144 74.8L288 256l-64 0 0 138.8C192.1 349.5 139.5 320 80 320L0 320z" />
        <path d="M96 128V32l80 48L256 0l80 80 80-48v96c0 70.7-57.3 128-128 128H224c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default FlowerTulip;