
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=sharp-solid filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 384l0-96L0 64 0 0 512 0l0 64L399.8 194.9C318 210.1 256 281.8 256 368c0 27.8 6.4 54.1 17.9 77.4L192 384zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3L502.6 320 480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7z" />
    </Icon>
);

export default FilterCircleXmark;