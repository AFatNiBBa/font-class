
import { Icon, generic } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-duotone-solid address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM64 384l32-96 160 0 32 96L64 384zM240 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm112-32l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
        <path d="M176 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM64 384l32-96 160 0 32 96L64 384z" />
    </Icon>
);

export default AddressCard;