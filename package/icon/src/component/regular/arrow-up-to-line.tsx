
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=regular arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zM209.5 167.6c-4.5-4.8-10.9-7.6-17.5-7.6s-12.9 2.7-17.5 7.6l-128 136c-9.1 9.7-8.6 24.8 1 33.9s24.8 8.6 33.9-1L168 244.5l0 83.5 0 128c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128 0-83.5 86.5 91.9c9.1 9.7 24.3 10.1 33.9 1s10.1-24.3 1-33.9l-128-136z" />
    </Icon>
);

export default ArrowUpToLine;