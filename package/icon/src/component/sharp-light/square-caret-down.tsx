
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-light square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM96 192l0 32 0 8L224 352 352 232l0-8 0-32-32 0-192 0-32 0zM224 308.1L134.3 224l179.5 0L224 308.1z" />
    </Icon>
);

export default SquareCaretDown;