
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=sharp-thin bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 0L96 0l0 64 64 0 0-64 16 0 0 64.1c53.4 2.1 96 46 96 99.9c0 36.5-19.5 68.4-48.7 85.9c46 9 80.7 49.5 80.7 98.1c0 55.2-44.8 100-100 100l-28 0 0 64-16 0 0-64-64 0 0 64-16 0 0-64-48 0-16 0 0-16 0-168 0-16L16 80l0-16 16 0 48 0L80 0zM32 80l0 168 140 0c46.4 0 84-37.6 84-84s-37.6-84-84-84L32 80zM172 264L32 264l0 168 172 0c46.4 0 84-37.6 84-84s-37.6-84-84-84l-32 0z" />
    </Icon>
);

export default BitcoinSign;