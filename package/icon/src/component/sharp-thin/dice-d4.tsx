
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-thin dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M245.8 12.8L10 307.5 0 320l12.8 9.6L248 506l8 6 8-6L499.2 329.6 512 320l-10-12.5L266.2 12.8 264 10 256 0l-8 10-2.2 2.8zM248 35.6L248 486 22.8 317.1 248 35.6zM264 486l0-450.4L489.2 317.1 264 486z" />
    </Icon>
);

export default DiceD4;