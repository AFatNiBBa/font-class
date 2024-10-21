
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-solid wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32L0 32 0 480l512 0 0-352L64 128l0-32 416 0 0-64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Wallet;