
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=duotone circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-88c0-13.3 10.7-24 24-24l152 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-94.1 0L361 327c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7l-135-135L192 328c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160z" />
        <path d="M168 144l152 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-94.1 0L361 327c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-135-135L192 328c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleArrowUpLeft;