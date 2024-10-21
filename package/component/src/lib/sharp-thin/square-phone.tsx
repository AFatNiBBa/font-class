
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=sharp-thin square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm175 92.1l40 72 3.3 5.9-5.3 4.2-36.6 29.3c16.3 28.3 39.8 51.8 68.1 68.1L273.7 267l4.2-5.3 5.9 3.3 72 40 5.2 2.9-1.3 5.8-16 72-1.4 6.3-6.4 0-16 0C191.9 392 88 288.1 88 160c0 0 0 0 0 0l0-16 0-6.4 6.3-1.4 72-16 5.8-1.3 2.9 5.2zM104 160s0 0 0 0c0 119.3 96.7 216 216 216l9.6 0 13.3-59.9L282 282.3l-29.3 36.6-4.1 5.2-5.8-3.1c-35.6-18.8-64.9-48.1-83.7-83.7l-3.1-5.8 5.2-4.1L197.7 198l-33.8-60.9L104 150.4l0 9.6z" />
    </Icon>
);

export default SquarePhone;