
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-duotone-solid boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l128 0 160 48 160 0 8 0 24 0 0 48-24 0-8 0-136 0-24 0-16 0L160 464l0 48L32 512l0-96z" />
        <path d="M32 0l96 0 0 240 0 16 32 0 0-16L160 0 288 0l0 288 192 96 0 80-160 0L160 416 32 416l0-32L64 256 32 64 32 0z" />
    </Icon>
);

export default BootHeeled;