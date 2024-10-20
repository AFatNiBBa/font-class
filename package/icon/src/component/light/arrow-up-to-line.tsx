
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=light arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32zM203.3 132.7c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 182.6 176 288l0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-105.4L308.7 283.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128z" />
    </Icon>
);

export default ArrowUpToLine;