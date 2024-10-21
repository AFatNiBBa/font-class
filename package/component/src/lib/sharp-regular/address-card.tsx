
import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-regular address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 352L48 432 48 80l480 0zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM96 384l224 0-32-96-160 0L96 384zM376 144l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm0 96l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0z" />
    </Icon>
);

export default AddressCard;