
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=thin coin-front}
 * @preview ![coin-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/coin-front.svg)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-432a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 368a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm8-280c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 176c0 4.4 3.6 8 8 8s8-3.6 8-8l0-176z" />
    </Icon>
);

export default CoinFront;