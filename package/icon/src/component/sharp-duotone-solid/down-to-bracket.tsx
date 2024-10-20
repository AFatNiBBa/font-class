
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=sharp-duotone-solid down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
        <path d="M224 352L384 192l0-32-96 0L288 0 160 0l0 160-96 0 0 32L224 352z" />
    </Icon>
);

export default DownToBracket;