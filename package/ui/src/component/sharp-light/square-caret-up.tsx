
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=sharp-light square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM96 320l0-32 0-8L224 160 352 280l0 8 0 32-32 0-192 0-32 0zM224 203.9L134.3 288l179.5 0L224 203.9z" />
    </Icon>
);

export default SquareCaretUp;