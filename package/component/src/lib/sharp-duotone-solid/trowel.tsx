
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=sharp-duotone-solid trowel}
 * @preview ![trowel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trowel.svg)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l280-72 40-40-81.4-81.4 112-112-45.3-45.3-112 112L112 192 72 232 0 512z" />
        <path d="M376 232l-96-96L416 0l96 96L376 232z" />
    </Icon>
);

export default Trowel;