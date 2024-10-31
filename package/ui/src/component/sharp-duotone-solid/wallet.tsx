
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-duotone-solid wallet}
 * @preview ![wallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wallet.svg)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l0 96 480 0 0-96L0 32z" />
        <path d="M512 128L0 128 0 480l512 0 0-352zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Wallet;