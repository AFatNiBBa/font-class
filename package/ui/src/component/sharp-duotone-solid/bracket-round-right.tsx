
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-round-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round-right?s=sharp-duotone-solid bracket-round-right}
 * @preview ![bracket-round-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bracket-round-right.svg)
 */
const BracketRoundRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M192 256C192 140.2 120.1 62.9 81.8 37.4L46.3 90.6C71.9 107.7 128 167 128 256s-56.1 148.3-81.8 165.4l35.5 53.3C120.1 449 192 371.8 192 256z" />
    </Icon>
);

export default BracketRoundRight;