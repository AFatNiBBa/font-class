
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=sharp-duotone-solid bracket-round}
 * @preview ![bracket-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bracket-round.svg)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 140.2 71.9 62.9 110.2 37.4l35.5 53.3C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4l-35.5 53.3C71.9 449 0 371.8 0 256z" />
    </Icon>
);

export default BracketRound;