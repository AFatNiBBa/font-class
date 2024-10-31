
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=duotone gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm112 0c0-13.3 10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24zm360 48a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64-96a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
        <path d="M192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Gamepad;