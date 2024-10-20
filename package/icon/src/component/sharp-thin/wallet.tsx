
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-thin wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 32L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-8 0-352 0-8-8 0L72 112l-8 0 0 16 8 0 424 0 0 336L16 464 16 48l456 0 8 0 0-16-8 0L8 32zM376 296a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm64 0a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default Wallet;