
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-seven-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven-thirty?s=sharp-duotone-solid clock-seven-thirty}
 * @preview ![clock-seven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-seven-thirty.svg)
 */
const ClockSevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM158.7 358.7l13.3-20 64-96L280 256l0 136 0 24-48 0 0-24 0-56.7-20 30-13.3 20-39.9-26.6z" />
        <path d="M232 416l0-24 0-56.7-20 30-13.3 20-39.9-26.6 13.3-20 64-96L280 256l0 136 0 24-48 0z" />
    </Icon>
);

export default ClockSevenThirty;