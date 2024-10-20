
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=sharp-duotone-solid dice-d10}
 * @preview ![dice-d10](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d10.svg)
 */
const DiceD10: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l0 1.4 139.7-31L215.1 0 192 0 0 256zm171-22.3l85 58.9 85-58.9L263.1 0 248.9 0 171 233.7zM296.9 0l75.4 226.3 139.7 31 0-1.4L320 0 296.9 0z" />
        <path d="M240 512L1.9 289.8l146.8-32.6L240 320.4 240 512zM510.1 289.8L272 512l0-191.6 91.4-63.2 146.8 32.6z" />
    </Icon>
);

export default DiceD10;