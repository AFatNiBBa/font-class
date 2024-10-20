
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=sharp-solid down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 192L224 352 64 192l0-32 96 0L160 0 288 0l0 160 96 0 0 32zM64 352l0 96 320 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 64 0 0 32z" />
    </Icon>
);

export default DownToBracket;