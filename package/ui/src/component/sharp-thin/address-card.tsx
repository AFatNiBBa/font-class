
import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-thin address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l0 416 544 0 0-416L16 48zM0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM360 176l144 0 8 0 0 16-8 0-144 0-8 0 0-16 8 0zm0 64l144 0 8 0 0 16-8 0-144 0-8 0 0-16 8 0zm0 64l144 0 8 0 0 16-8 0-144 0-8 0 0-16 8 0zM102.2 368l-16.9 0L112 288l160 0 26.7 80-16.9 0-21.3-64-136.9 0-21.3 64zM240 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default AddressCard;