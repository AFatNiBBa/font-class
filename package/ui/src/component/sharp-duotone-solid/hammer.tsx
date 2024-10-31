
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-duotone-solid hammer}
 * @preview ![hammer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hammer.svg)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l96 96L352 224l-64-64L0 416z" />
        <path d="M176 48l49.6-29.8C245.5 6.3 268.3 0 291.5 0L315 0c33.9 0 66.5 13.5 90.5 37.5L504 136l-24 24 24 24 24-24 48 48L456 328l-48-48 24-24-24-24-24 24L272 144l0-48L176 48z" />
    </Icon>
);

export default Hammer;