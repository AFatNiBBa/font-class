
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-bracket?s=sharp-solid down-from-bracket}
 * @preview ![down-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-from-bracket.svg)
 */
const DownFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 352L224 512 384 352l0-32-96 0 0-160-128 0 0 160-96 0 0 32zm0-192l0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0 0 32 0 160l0 32 64 0 0-32z" />
    </Icon>
);

export default DownFromBracket;