
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-light filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 256l0 112 64 48 0-160 0-13.3 9.4-9.4L608 82.7 608 64 224 64l0 18.7L374.6 233.4l9.4 9.4 0 13.3zm-32 0L192 96l0-32 0-32 32 0 384 0 32 0 0 32 0 32L480 256l0 184 0 40-32-24-96-72 0-128zM32 96l128 0 0 13.3 9.4 9.4 9.4 9.4L32 128l0 18.7L182.6 297.4l9.4 9.4 0 13.3 0 80 64 48 0-128 0-13.3 9.4-9.4L306.7 256 320 269.3l0 18.7-32 32 0 152 0 40-32-24-96-72 0-96L0 160l0-32L0 96l32 0z" />
    </Icon>
);

export default Filters;