
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-six-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six-thirty?s=sharp-duotone-solid clock-six-thirty}
 * @preview ![clock-six-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-six-thirty.svg)
 */
const ClockSixThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-24l48 0 0 24 0 136 0 24-48 0 0-24 0-136 0-24z" />
        <path d="M280 416l0-24 0-136 0-24-48 0 0 24 0 136 0 24 48 0z" />
    </Icon>
);

export default ClockSixThirty;