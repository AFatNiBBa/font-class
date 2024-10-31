
import { Icon } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-regular cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M399.4 347.8L228.5 446.4 65.6 164.2 236.4 65.6 399.4 347.8zM210.9 512l41.6-24 170.9-98.7 41.6-24-24-41.6L278 41.6 254 0 212.4 24 0 146.7 186.9 470.4l24 41.6zM320 486l0 26 320 0 0-448L327.9 64 492.7 349.4l16 27.7-27.7 16L320 486z" />
    </Icon>
);

export default CardsBlank;