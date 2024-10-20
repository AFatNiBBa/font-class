
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=sharp-duotone-solid filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 64 192 288l0 96 81.9 61.4C262.4 422.1 256 395.8 256 368c0-86.2 62-157.9 143.8-173.1L512 64l0-64L0 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7L502.6 320z" />
    </Icon>
);

export default FilterCircleXmark;