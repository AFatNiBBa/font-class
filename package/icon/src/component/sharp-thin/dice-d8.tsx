
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-thin dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 504l8 8 8-8 3.3-3.3L499.1 268.9l1.6-1.6L512 256l-6.3-6.3-5-5L267.3 11.3 264 8l-8-8-8 8-3.3 3.3L11.3 244.7l-5 5L0 256l11.3 11.3 1.6 1.6L244.7 500.7 248 504zm0-22.6L47.4 280.7l200.6 69 0 131.7zM23.1 255.5L248 30.6l0 302.2L23.1 255.5zM264 30.6L488.9 255.5 264 332.8l0-302.2zm0 319.1l200.6-69L264 481.4l0-131.7z" />
    </Icon>
);

export default DiceD8;