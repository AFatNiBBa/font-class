
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-four-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-four-thirty?s=sharp-duotone-solid clock-four-thirty}
 * @preview ![clock-four-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-four-thirty.svg)
 */
const ClockFourThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-44.8L269.3 236l96 64 20 13.3-26.6 39.9-20-13.3L280 300.8l0 91.2 0 24-48 0 0-24 0-136 0-44.8z" />
        <path d="M280 416l0-24 0-91.2L338.7 340l20 13.3 26.6-39.9-20-13.3-96-64L232 211.2l0 44.8 0 136 0 24 48 0z" />
    </Icon>
);

export default ClockFourThirty;