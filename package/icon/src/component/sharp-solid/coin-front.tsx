
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=sharp-solid coin-front}
 * @preview ![coin-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/coin-front.svg)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm24-264l0-24-48 0 0 24 0 144 0 24 48 0 0-24 0-144z" />
    </Icon>
);

export default CoinFront;