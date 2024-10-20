
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-round-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round-right?s=duotone bracket-round-right}
 * @preview ![bracket-round-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bracket-round-right.svg)
 */
const BracketRoundRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M37.4 46.2C27.6 61 31.5 80.8 46.3 90.6C71.9 107.7 128 167 128 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4s29.7 18.7 44.4 8.9C120.1 449 192 371.8 192 256S120.1 62.9 81.8 37.4C67 27.6 47.2 31.5 37.4 46.2z" />
    </Icon>
);

export default BracketRoundRight;