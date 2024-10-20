
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-snorkel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-snorkel?s=sharp-duotone-solid mask-snorkel}
 * @preview ![mask-snorkel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mask-snorkel.svg)
 */
const MaskSnorkel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 352l0 32c0 70.7 57.3 128 128 128l8 0c75.1 0 136-60.9 136-136l0-184-64 0 0 184c0 39.8-32.2 72-72 72l-8 0c-35.3 0-64-28.7-64-64l0-32-64 0zM512 32l0 32 0 96 64 0 0-96 0-32-64 0z" />
        <path d="M0 64L0 288l176 0 32-64 32 0 32 64 176 0 0-224L0 64zm576 96l-64 0 0 32 64 0 0-32z" />
    </Icon>
);

export default MaskSnorkel;