
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-bracket?s=sharp-solid up-from-bracket}
 * @preview ![up-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-from-bracket.svg)
 */
const UpFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 160L224 0 384 160l0 32-96 0 0 160-128 0 0-160-96 0 0-32zm0 192l0 96 320 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 64 0 0 32z" />
    </Icon>
);

export default UpFromBracket;