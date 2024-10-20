
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=sharp-duotone-solid clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM158.7 153.3l39.9-26.6 13.3 20 64 96 4 6 0 7.3 0 136 0 24-48 0 0-24 0-128.7-60-90-13.3-20z" />
        <path d="M232 416l0-24 0-128.7-60-90-13.3-20 39.9-26.6 13.3 20 64 96 4 6 0 7.3 0 136 0 24-48 0z" />
    </Icon>
);

export default ClockElevenThirty;