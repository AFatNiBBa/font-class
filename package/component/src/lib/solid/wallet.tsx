
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=solid wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Wallet;