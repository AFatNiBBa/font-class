
import { Icon } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-thin cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M443.1 359.5L216.8 490.1 21.9 152.5 248.1 21.9 443.1 359.5zM240.1 8L0 146.7 202.9 498.1l8 13.9 13.9-8L451.1 373.4l13.9-8-8-13.9L262 13.9 254 0 240.1 8zM320 496l0 16 16 0 288 0 16 0 0-16 0-416 0-16-16 0L327.9 64l9.2 16L624 80l0 416-288 0 0-19.3L320 486l0 10z" />
    </Icon>
);

export default CardsBlank;