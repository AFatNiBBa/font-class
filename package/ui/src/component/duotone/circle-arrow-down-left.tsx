
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=duotone circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-72c0-13.3 10.7-24 24-24s24 10.7 24 24l0 102.1L327 151c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17l-135 135 94.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-152 0c-13.3 0-24-10.7-24-24l0-160z" />
        <path d="M168 368l152 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-94.1 0L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135L192 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default CircleArrowDownLeft;