
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=sharp-light coin-front}
 * @preview ![coin-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/coin-front.svg)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-416a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm16-272l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160z" />
    </Icon>
);

export default CoinFront;