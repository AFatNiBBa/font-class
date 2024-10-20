
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=sharp-regular bracket-round}
 * @preview ![bracket-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bracket-round.svg)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M168.9 64.3L148.3 76.6C115.3 96.3 48 160.7 48 256s67.3 159.7 100.3 179.4l20.6 12.3-24.6 41.2-20.6-12.3C82 451.8 0 374.1 0 256S82 60.2 123.7 35.4l20.6-12.3 24.6 41.2z" />
    </Icon>
);

export default BracketRound;