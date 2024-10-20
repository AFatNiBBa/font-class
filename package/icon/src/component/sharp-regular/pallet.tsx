
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-regular pallet}
 * @preview ![pallet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pallet.svg)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 320L0 320l0 48 24 0 40 0 0 96-40 0L0 464l0 48 24 0 40 0 24 0 24 0 184 0 24 0 24 0 184 0 24 0 24 0 40 0 24 0 0-48-24 0-40 0 0-96 40 0 24 0 0-48-24 0-40 0-24 0-24 0-184 0-24 0-24 0-184 0-24 0-24 0-40 0zm88 48l184 0 0 96-184 0 0-96zm232 0l184 0 0 96-184 0 0-96z" />
    </Icon>
);

export default Pallet;