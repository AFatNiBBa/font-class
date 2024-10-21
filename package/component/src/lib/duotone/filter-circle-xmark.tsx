
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=duotone filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M3.9 22.9C-2.8 36.8-.7 53.4 9 65.3L192 288.9l0 79.1c0 10.1 4.7 19.6 12.8 25.6l64 48c1.5 1.1 3 2.1 4.7 2.9C262.3 421.4 256 395.4 256 368c0-85 60.2-155.9 140.4-172.4L503 65.3c9.8-12 11.8-28.5 5.2-42.5S487.5 0 472 0L40 0C24.5 0 10.5 8.9 3.9 22.9z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default FilterCircleXmark;