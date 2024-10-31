
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-4?s=sharp-duotone-solid square-4}
 * @preview ![square-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-4.svg)
 */
const Square_4: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM112.4 320l31.6 0 96 0 0 40 0 24 48 0 0-24 0-40 8 0 24 0 0-48-24 0-8 0 0-56 0-24-48 0 0 24 0 56-64.4 0 40-144-49.8 0L120.9 289.6 112.4 320z" />
        <path d="M120.9 289.6L165.8 128l49.8 0-40 144 64.4 0 0-56 0-24 48 0 0 24 0 56 8 0 24 0 0 48-24 0-8 0 0 40 0 24-48 0 0-24 0-40-96 0-31.6 0 8.5-30.4z" />
    </Icon>
);

export default Square_4;