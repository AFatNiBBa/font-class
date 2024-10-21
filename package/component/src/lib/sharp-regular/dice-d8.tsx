
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-regular dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 488l24 24 24-24 9.9-9.9L473.3 294.7l4.7-4.7L512 256l-18.9-18.9-15.1-15.1L289.9 33.9 280 24 256 0 232 24l-9.9 9.9L33.9 222.1 18.9 237.1 0 256l33.9 33.9 4.7 4.7L222.1 478.1 232 488zm0-67.9l-89.9-89.9L232 361.1l0 59zM69.4 254.5L232 91.9l0 218.5L69.4 254.5zM280 91.9L442.6 254.5 280 310.4l0-218.5zm0 269.2l89.9-30.9L280 420.1l0-59z" />
    </Icon>
);

export default DiceD8;