
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=duotone circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160 0c0-6.1 2.3-12.3 7-17L271 135c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17l-87 87 87 87c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7L167 273c-4.7-4.7-7-10.8-7-17z" />
        <path d="M167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273z" />
    </Icon>
);

export default CircleChevronLeft;