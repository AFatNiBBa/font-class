
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long-to-line?s=sharp-duotone-solid arrow-right-long-to-line}
 * @preview ![arrow-right-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-long-to-line.svg)
 */
const ArrowRightLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
    </Icon>
);

export default ArrowRightLongToLine;