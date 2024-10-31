
import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-light address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM160 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM135.1 320l113.9 0 21.3 64 33.7 0-32-96-160 0L80 384l33.7 0 21.3-64zM352 160l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0zm0 64l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0zm0 64l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default AddressCard;