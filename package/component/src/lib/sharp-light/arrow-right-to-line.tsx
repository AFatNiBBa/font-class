
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=sharp-light arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 80l0-16-32 0 0 16 0 352 0 16 32 0 0-16 0-352zM347.3 267.3L358.6 256l-11.3-11.3-128-128L208 105.4 185.4 128l11.3 11.3L297.4 240 192 240 16 240 0 240l0 32 16 0 176 0 105.4 0L196.7 372.7 185.4 384 208 406.6l11.3-11.3 128-128z" />
    </Icon>
);

export default ArrowRightToLine;