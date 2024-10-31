
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=sharp-light bracket-round}
 * @preview ![bracket-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bracket-round.svg)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 256C0 136.7 91.2 58.4 136.4 33.9l15.2 28.1C111.5 83.8 32 153.4 32 256s79.5 172.2 119.6 193.9l-15.2 28.1C91.2 453.6 0 375.3 0 256z" />
    </Icon>
);

export default BracketRound;