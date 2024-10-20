
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=duotone coin-front}
 * @preview ![coin-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/coin-front.svg)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm136-72c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144z" />
        <path d="M256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384z" />
    </Icon>
);

export default CoinFront;