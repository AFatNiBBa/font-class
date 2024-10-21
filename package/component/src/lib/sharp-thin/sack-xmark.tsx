
import { Icon } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=sharp-thin sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M405 16l-62.9 91.2L333 120.4c4.1 2.6 8.6 5.6 13.3 8.8C406.9 170.8 512 262.9 512 416l0 80 0 16-16 0L16 512 0 512l0-16 0-80C0 262.9 105.1 170.8 165.7 129.2c4.7-3.3 9.2-6.2 13.3-8.8l-9.1-13.2L107 16 96 0l19.4 0L396.6 0 416 0 405 16zm91 400c0-156.4-115.8-246.4-171.6-282.1l-9.2-5.9-118.3 0-9.2 5.9C131.8 169.6 16 259.6 16 416l0 80 480 0 0-80zM319.3 112l.5-.7L385.5 16 126.5 16l65.7 95.3 .5 .7 126.7 0zM197.7 250.3L256 308.7l58.3-58.3 5.7-5.7L331.3 256l-5.7 5.7L267.3 320l58.3 58.3 5.7 5.7L320 395.3l-5.7-5.7L256 331.3l-58.3 58.3-5.7 5.7L180.7 384l5.7-5.7L244.7 320l-58.3-58.3-5.7-5.7L192 244.7l5.7 5.7z" />
    </Icon>
);

export default SackXmark;