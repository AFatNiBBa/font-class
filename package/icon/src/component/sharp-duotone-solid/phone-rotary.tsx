
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-duotone-solid phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128s96-96 256-96s256 96 256 96l0 80-96 0-32-80s-48-24-128-24s-128 24-128 24L96 208 0 208l0-80zM328 312a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M32 384l0 96 448 0 0-96L352 160l-192 0L32 384zM256 240a72 72 0 1 1 0 144 72 72 0 1 1 0-144z" />
    </Icon>
);

export default PhoneRotary;