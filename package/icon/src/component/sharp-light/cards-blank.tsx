
import { Icon } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-light cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M421.2 353.6L222.6 468.3 43.7 158.4 242.3 43.7 421.2 353.6zM226.3 16L0 146.7 194.9 484.3l16 27.7 27.7-16L437.2 381.4l27.7-16-16-27.7L270 27.7 254 0 226.3 16zM320 512l32 0 256 0 32 0 0-32 0-384 0-32-32 0L336.1 64l-8.2 0 18.5 32L608 96l0 384-256 0 0-12.5L320 486l0 26z" />
    </Icon>
);

export default CardsBlank;