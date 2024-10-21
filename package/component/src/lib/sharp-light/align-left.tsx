
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-light align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48L0 48 0 80l16 0 256 0 16 0 0-32-16 0L16 48zm0 128L0 176l0 32 16 0 416 0 16 0 0-32-16 0L16 176zM0 304l0 32 16 0 256 0 16 0 0-32-16 0L16 304 0 304zM16 432L0 432l0 32 16 0 416 0 16 0 0-32-16 0L16 432z" />
    </Icon>
);

export default AlignLeft;