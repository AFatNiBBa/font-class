
import { Icon } from "../../index";

/**
 * A component that renders the `left-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-bracket?s=sharp-solid left-from-bracket}
 * @preview ![left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-from-bracket.svg)
 */
const LeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416L0 256 160 96l32 0 0 96 160 0 0 128-160 0 0 96-32 0zm192 0l96 0 0-320-96 0-32 0 0-64 32 0 128 0 32 0 0 32 0 384 0 32-32 0-128 0-32 0 0-64 32 0z" />
    </Icon>
);

export default LeftFromBracket;