
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-duotone-solid bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 192l0 64 64 0 96 0 0-64-96 0L64 64l128 0 0 32 64 0 0-32 0-64L192 0 64 0 0 0zM384 416l0 32 0 64 64 0 128 0 64 0 0-64 0-128 0-64-64 0-96 0 0 64 96 0 0 128-128 0 0-32-64 0z" />
        <path d="M480 96L160 96l0 320 320 0 0-320z" />
    </Icon>
);

export default BringFront;