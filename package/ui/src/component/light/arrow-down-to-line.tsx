
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=light arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480zM203.3 379.3c-6.2 6.2-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 329.4 176 224l0-176c0-8.8 7.2-16 16-16s16 7.2 16 16l0 176 0 105.4L308.7 228.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-128 128z" />
    </Icon>
);

export default ArrowDownToLine;