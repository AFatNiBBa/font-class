
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=light arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16s16-7.2 16-16l0-352zM347.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 240 192 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l176 0 105.4 0L196.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128z" />
    </Icon>
);

export default ArrowRightToLine;