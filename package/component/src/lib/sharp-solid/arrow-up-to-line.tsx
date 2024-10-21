
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-solid arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32L0 32 0 96l32 0 320 0 32 0 0-64-32 0L32 32zM214.6 169.4L192 146.7l-22.6 22.6-128 128L18.7 320 64 365.3l22.6-22.6L160 269.3 160 448l0 32 64 0 0-32 0-178.7 73.4 73.4L320 365.3 365.3 320l-22.6-22.6-128-128z" />
    </Icon>
);

export default ArrowUpToLine;