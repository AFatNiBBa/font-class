
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-duotone-solid square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
        <path d="M224 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm160 96A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
    </Icon>
);

export default SquareRing;