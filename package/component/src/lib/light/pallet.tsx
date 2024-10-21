
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=light pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 96-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 240 0 240 0 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-96 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0-240 0L80 352l-64 0zm80 32l208 0 0 96L96 480l0-96zm240 0l208 0 0 96-208 0 0-96z" />
    </Icon>
);

export default Pallet;