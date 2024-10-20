
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-line?s=sharp-duotone-solid arrow-left-from-line}
 * @preview ![arrow-left-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-from-line.svg)
 */
const ArrowLeftFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 65.4l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M1.4 257.4L24 234.7l128-128 22.6-22.6 45.3 45.3L197.3 152l-73.4 73.4 162.7 0 32 0 0 64-32 0-162.7 0 73.4 73.4 22.6 22.6-45.3 45.3L152 408 24 280 1.4 257.4z" />
    </Icon>
);

export default ArrowLeftFromLine;