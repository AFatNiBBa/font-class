
import { Icon } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=thin bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 64 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56.1c53.4 2.1 96 46 96 99.9c0 36.5-19.5 68.4-48.7 85.9c46 9 80.7 49.5 80.7 98.1c0 55.2-44.8 100-100 100l-28 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-64 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-26.4 0C32.8 448 16 431.2 16 410.4L16 264l0-16L16 97.4C16 78.9 30.9 64 49.4 64L80 64 80 8zM49.4 80C39.8 80 32 87.8 32 97.4L32 248l140 0c46.4 0 84-37.6 84-84s-37.6-84-84-84L49.4 80zM172 264L32 264l0 146.4c0 11.9 9.7 21.6 21.6 21.6L204 432c46.4 0 84-37.6 84-84s-37.6-84-84-84l-32 0z" />
    </Icon>
);

export default BitcoinSign;