
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-two-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two-thirty?s=sharp-duotone-solid clock-two-thirty}
 * @preview ![clock-two-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-two-thirty.svg)
 */
const ClockTwoThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-12.8l10.7-7.1 96-64 20-13.3 26.6 39.9c-6.7 4.4-13.3 8.9-20 13.3c-28.4 19-56.9 37.9-85.3 56.9c0 41.1 0 82.1 0 123.2c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-45.3 0-90.7 0-136c0-4.3 0-8.6 0-12.8z" />
        <path d="M232 416l0-24 0-136 0-12.8 10.7-7.1 96-64 20-13.3 26.6 39.9-20 13.3L280 268.8 280 392l0 24-48 0z" />
    </Icon>
);

export default ClockTwoThirty;