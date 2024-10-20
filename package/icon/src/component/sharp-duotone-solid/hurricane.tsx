
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-duotone-solid hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 208C0 317.5 84.6 407.2 192 415.4l0 95.4c107.4-8.2 192-97.9 192-207.4S299.4 104.2 192 96L192 .6C84.6 8.8 0 98.5 0 208zm288 48A96 96 0 1 1 96 256a96 96 0 1 1 192 0z" />
        <path d="M192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hurricane;