
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=sharp-solid dice-d10}
 * @preview ![dice-d10](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice-d10.svg)
 */
const DiceD10: typeof Icon = x => (
    <Icon {...x}>
        <path d="M215.1 0L192 0 0 256l0 1.4 139.7-31L215.1 0zM1.9 289.8L240 512l0-191.6-91.4-63.2L1.9 289.8zM272 512L510.1 289.8 363.4 257.1 272 320.4 272 512zM512 257.4l0-1.4L320 0 296.9 0l75.4 226.3 139.7 31zM248.9 0L171 233.7l85 58.9 85-58.9L263.1 0 248.9 0z" />
    </Icon>
);

export default DiceD10;