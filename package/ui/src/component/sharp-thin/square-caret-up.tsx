
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=sharp-thin square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM96 320l0-16 0-24L224 160 352 280l0 24 0 16-16 0-224 0-16 0zm240-33.1l-112-105-112 105 0 17.1 224 0 0-17.1z" />
    </Icon>
);

export default SquareCaretUp;