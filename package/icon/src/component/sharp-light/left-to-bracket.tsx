
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-light left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 208l-32 0 0-32 0-48-17.7 0L203.1 256 318.3 384l17.7 0 0-48 0-32 32 0 112 0 0-96-112 0zm0-112l0 32 0 16 0 32 32 0 80 0 32 0 0 32 0 96 0 32-32 0-80 0-32 0 0 32 0 16 0 32-32 0-32 0L160 256 304 96l32 0 32 0zM176 448l16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l16 0 160 0 16 0 0 32-16 0L32 64l0 384 144 0z" />
    </Icon>
);

export default LeftToBracket;