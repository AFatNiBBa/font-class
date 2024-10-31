
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long-to-line?s=sharp-duotone-solid arrow-left-long-to-line}
 * @preview ![arrow-left-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-long-to-line.svg)
 */
const ArrowLeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 0 32 0 320 0 32L0 448l0-32L0 96 0 64z" />
        <path d="M150.6 233.4L128 256l22.6 22.6 128 128 22.6 22.6L346.5 384l-22.6-22.6L250.5 288 608 288l32 0 0-64-32 0-357.5 0 73.4-73.4L346.5 128 301.3 82.7l-22.6 22.6-128 128z" />
    </Icon>
);

export default ArrowLeftLongToLine;