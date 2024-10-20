
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=sharp-regular coin-front}
 * @preview ![coin-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/coin-front.svg)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm24-248l0-24-48 0 0 24 0 144 0 24 48 0 0-24 0-144z" />
    </Icon>
);

export default CoinFront;