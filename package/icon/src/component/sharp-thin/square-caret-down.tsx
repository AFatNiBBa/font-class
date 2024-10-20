
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-thin square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zM96 192l0 16 0 24L224 352 352 232l0-24 0-16-16 0-224 0-16 0zm240 33.1l-112 105-112-105 0-17.1 224 0 0 17.1z" />
    </Icon>
);

export default SquareCaretDown;