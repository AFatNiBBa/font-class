
import { Icon, generic } from "../../index";

/**
 * A component that renders the `manat-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=duotone manat-sign}
 * @preview ![manat-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/manat-sign.svg)
 */
const ManatSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 34.7c-5.2-.9-10.5-1.5-15.8-2c-2.7-.2-5.4-.4-8-.5c-1.3-.1-2.7-.1-4.1-.1s-2.7 0-4.1 0c-10.9 0-21.6 .9-32 2.7L160 64zm0 100c5.1-1.3 10.3-2.3 15.7-3c2.7-.3 5.4-.6 8.1-.8c1.4-.1 2.7-.2 4.1-.2s2.7-.1 4.1-.1c11 0 21.8 1.4 32 4l0 284c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-284z" />
        <path d="M0 288C0 182 86 96 192 96s192 86 192 192l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-70.7-57.3-128-128-128s-128 57.3-128 128l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 288z" />
    </Icon>
);

export default ManatSign;