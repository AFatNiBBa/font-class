
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=duotone circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM200 152c0 6.1 2.3 12.3 7 17l87 87-87 87c-4.7 4.7-7 10.8-7 17s2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7L345 273c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17L241 135c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17z" />
        <path d="M345 239c9.4 9.4 9.4 24.6 0 33.9L241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239z" />
    </Icon>
);

export default CircleChevronRight;