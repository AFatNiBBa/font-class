
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-right?s=sharp-duotone-solid arrows-turn-right}
 * @preview ![arrows-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-turn-right.svg)
 */
const ArrowsTurnRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 32 0 96 0 32 64 0 0-32 0-64 178.7 0-25.4 25.4L194.7 464 240 509.3l22.6-22.6 80-80L365.3 384l-22.6-22.6-80-80L240 258.7 194.7 304l22.6 22.6L242.7 352 32 352 0 352z" />
        <path d="M320 2.7l22.6 22.6 80 80L445.3 128l-22.6 22.6-80 80L320 253.3 274.7 208l22.6-22.6L322.7 160 64 160l0 96 0 32L0 288l0-32L0 128 0 96l32 0 290.7 0L297.4 70.6 274.7 48 320 2.7z" />
    </Icon>
);

export default ArrowsTurnRight;