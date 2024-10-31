
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eight-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight-thirty?s=sharp-duotone-solid clock-eight-thirty}
 * @preview ![clock-eight-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-eight-thirty.svg)
 */
const ClockEightThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm126.7 57.3l20-13.3 96-64L280 211.2l0 44.8 0 136 0 24-48 0 0-24 0-91.2L173.3 340l-20 13.3-26.6-39.9z" />
        <path d="M232 416l0-24 0-91.2L173.3 340l-20 13.3-26.6-39.9 20-13.3 96-64L280 211.2l0 44.8 0 136 0 24-48 0z" />
    </Icon>
);

export default ClockEightThirty;