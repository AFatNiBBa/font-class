
import { Icon } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-solid cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464.9 365.4L210.9 512 0 146.7 254 0 464.9 365.4zM320 512l0-26 160.9-92.9 27.7-16-16-27.7L327.9 64 640 64l0 448-320 0z" />
    </Icon>
);

export default CardsBlank;