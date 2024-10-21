
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-duotone-solid down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 32l0 224 128 0 0-224L128 32z" />
        <path d="M0 256l0 32L192 480 384 288l0-32-128 0-128 0L0 256z" />
    </Icon>
);

export default Down;