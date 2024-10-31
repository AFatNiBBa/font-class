
import { Icon } from "../../index";

/**
 * A component that renders the `sd-cards` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=sharp-solid sd-cards}
 * @preview ![sd-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sd-cards.svg)
 */
const SdCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 0L224 0 210.7 0l-9.4 9.4-96 96L96 114.7 96 128l0 256 0 32 32 0 288 0 32 0 0-32 0-352 0-32L416 0zM304 64l0 24 0 48 0 24-48 0 0-24 0-48 0-24 48 0zm80 0l0 24 0 48 0 24-48 0 0-24 0-48 0-24 48 0zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 336 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default SdCards;