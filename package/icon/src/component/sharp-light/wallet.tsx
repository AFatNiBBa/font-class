
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-light wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L112 96 96 96l0 32 16 0 368 0 0 320L32 448 32 64l432 0 16 0 0-32-16 0L16 32zM384 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Wallet;