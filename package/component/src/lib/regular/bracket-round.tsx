
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=regular bracket-round}
 * @preview ![bracket-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bracket-round.svg)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M156.6 43.7c6.8 11.4 3 26.1-8.3 32.9C115.3 96.3 48 160.7 48 256s67.3 159.7 100.3 179.4c11.4 6.8 15.1 21.5 8.3 32.9s-21.5 15.1-32.9 8.3C82 451.8 0 374.1 0 256S82 60.2 123.7 35.4c11.4-6.8 26.1-3 32.9 8.3z" />
    </Icon>
);

export default BracketRound;