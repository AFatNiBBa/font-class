
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-bracket?s=sharp-solid up-to-bracket}
 * @preview ![up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-to-bracket.svg)
 */
const UpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 320L224 160 64 320l0 32 96 0 0 160 128 0 0-160 96 0 0-32zM64 160l0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0 0 32 0 160l0 32 64 0 0-32z" />
    </Icon>
);

export default UpToBracket;