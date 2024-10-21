
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-light pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 352L0 352l0 32 16 0 48 0 0 96-48 0L0 480l0 32 16 0 48 0 16 0 16 0 208 0 16 0 16 0 208 0 16 0 16 0 48 0 16 0 0-32-16 0-48 0 0-96 48 0 16 0 0-32-16 0-48 0-16 0-16 0-208 0-16 0-16 0L96 352l-16 0-16 0-48 0zm80 32l208 0 0 96L96 480l0-96zm240 0l208 0 0 96-208 0 0-96z" />
    </Icon>
);

export default Pallet;