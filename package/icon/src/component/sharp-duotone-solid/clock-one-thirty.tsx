
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-one-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one-thirty?s=sharp-duotone-solid clock-one-thirty}
 * @preview ![clock-one-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-one-thirty.svg)
 */
const ClockOneThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-7.3l4-6 64-96 13.3-20 39.9 26.6-13.3 20-60 90L280 392l0 24-48 0 0-24 0-136 0-7.3z" />
        <path d="M280 416l0-24 0-128.7 60-90 13.3-20-39.9-26.6-13.3 20-64 96-4 6 0 7.3 0 136 0 24 48 0z" />
    </Icon>
);

export default ClockOneThirty;