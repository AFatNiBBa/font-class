
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=sharp-regular down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 128l0 48 48 0 28.1 0L224 284.1 115.9 176l28.1 0 48 0 0-48 0-80 64 0 0 80zm1.9 190.1L384 192l0-16 0-48-32 0-16 0-32 0 0-48 0-32 0-48L256 0 192 0 144 0l0 48 0 32 0 48-32 0-16 0-32 0 0 48 0 16L190.1 318.1 224 352l33.9-33.9zM48 344l0-24L0 320l0 24L0 488l0 24 24 0 400 0 24 0 0-24 0-144 0-24-48 0 0 24 0 120L48 464l0-120z" />
    </Icon>
);

export default DownToBracket;