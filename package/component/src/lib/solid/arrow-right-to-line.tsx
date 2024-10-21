
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=solid arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320zM310.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l178.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </Icon>
);

export default ArrowRightToLine;