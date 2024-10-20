
import { Icon } from "../../index";

/**
 * A component that renders the `sd-cards` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=sharp-regular sd-cards}
 * @preview ![sd-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sd-cards.svg)
 */
const SdCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 368l0-320L227.9 48 144 131.9 144 368l256 0zM96 112L208 0 400 0l48 0 0 48 0 320 0 48-48 0-256 0-48 0 0-48 0-256zM48 96l0 24 0 344 312 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0zm256 0l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zm64 0l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default SdCards;