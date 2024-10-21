
import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-solid address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32 0 480l576 0 0-448zM256 288l32 96L64 384l32-96 160 0zM112 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zm0 64l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zm0 64l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0z" />
    </Icon>
);

export default AddressCard;