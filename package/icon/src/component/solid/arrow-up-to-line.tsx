
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=solid arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM214.6 169.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 269.3 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-178.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
    </Icon>
);

export default ArrowUpToLine;