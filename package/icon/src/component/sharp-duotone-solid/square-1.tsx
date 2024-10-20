
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-1?s=sharp-duotone-solid square-1}
 * @preview ![square-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-1.svg)
 */
const Square_1: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM144 164.5l0 54.9 11.7-6.5L200 188.3 200 336l-32 0-24 0 0 48 24 0 56 0 56 0 24 0 0-48-24 0-32 0 0-184 0-24-24 0-8 0-6.2 0-5.4 3L144 164.5z" />
        <path d="M209.8 128l6.2 0 8 0 24 0 0 24 0 184 32 0 24 0 0 48-24 0-56 0-56 0-24 0 0-48 24 0 32 0 0-147.7L155.7 213 144 219.5l0-54.9L204.3 131l5.4-3z" />
    </Icon>
);

export default Square_1;