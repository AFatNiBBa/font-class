
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=sharp-light down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 144l0 32 32 0 48 0 0 17.7L224 308.9 96 193.7 96 176l48 0 32 0 0-32 0-112 96 0 0 112zm112 0l-32 0-16 0-32 0 0-32 0-80 0-32L272 0 176 0 144 0l0 32 0 80 0 32-32 0-16 0-32 0 0 32 0 32L224 352 384 208l0-32 0-32zM32 336l0-16L0 320l0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-160 0-16-32 0 0 16 0 144L32 480l0-144z" />
    </Icon>
);

export default DownToBracket;