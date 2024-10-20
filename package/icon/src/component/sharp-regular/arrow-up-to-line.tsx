
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-regular arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 336 0 24 0 0-48-24 0L24 32zM209.5 167.6L192 149l-17.5 18.6-128 136L30.1 321l35 32.9 16.4-17.5L168 244.5l0 83.5 0 128 0 24 48 0 0-24 0-128 0-83.5 86.5 91.9L319 353.9l35-32.9-16.4-17.5-128-136z" />
    </Icon>
);

export default ArrowUpToLine;