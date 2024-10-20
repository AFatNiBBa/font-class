
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-three-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three-thirty?s=duotone clock-three-thirty}
 * @preview ![clock-three-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-three-thirty.svg)
 */
const ClockThreeThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
        <path d="M256 416c-13.3 0-24-10.7-24-24l0-136c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 112c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default ClockThreeThirty;