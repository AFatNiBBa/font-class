
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-solid left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 96L160 256 320 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0zM160 416l-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32 0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0z" />
    </Icon>
);

export default LeftToBracket;