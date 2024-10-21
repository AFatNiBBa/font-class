
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-three-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three-thirty?s=sharp-duotone-solid clock-three-thirty}
 * @preview ![clock-three-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-three-thirty.svg)
 */
const ClockThreeThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-24l24 0 104 0 24 0 0 48-24 0-80 0 0 112 0 24-48 0 0-24 0-136 0-24z" />
        <path d="M232 416l0-24 0-136 0-24 24 0 104 0 24 0 0 48-24 0-80 0 0 112 0 24-48 0z" />
    </Icon>
);

export default ClockThreeThirty;