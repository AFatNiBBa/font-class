
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=sharp-duotone-solid arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M333.3 256l-22.6 22.6-128 128L160 429.3 114.7 384l22.6-22.6L210.7 288 32 288 0 288l0-64 32 0 178.7 0-73.4-73.4L114.7 128 160 82.7l22.6 22.6 128 128L333.3 256z" />
    </Icon>
);

export default ArrowRightToLine;