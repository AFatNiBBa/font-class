
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-solid phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 128s96-96 256-96s256 96 256 96l0 80-96 0-32-80s-48-24-128-24s-128 24-128 24L96 208 0 208l0-80zM32 480l0-96L160 160l192 0L480 384l0 96L32 480zM328 312a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" />
    </Icon>
);

export default PhoneRotary;