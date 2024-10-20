
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-duotone-solid cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 64l0 50.3 144.9 251C416.6 393.2 368.3 421.1 320 449l0 63 320 0 0-448L320 64z" />
        <path d="M210.9 512l254-146.6L254 0 0 146.7 210.9 512z" />
    </Icon>
);

export default CardsBlank;