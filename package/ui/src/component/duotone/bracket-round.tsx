
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=duotone bracket-round}
 * @preview ![bracket-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bracket-round.svg)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M154.6 46.2c9.8 14.7 5.8 34.6-8.9 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449.1 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z" />
    </Icon>
);

export default BracketRound;