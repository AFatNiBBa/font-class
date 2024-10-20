
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-duotone-solid box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 128l0 352 448 0 0-352L32 128zm128 64l192 0 0 64-192 0 0-64z" />
        <path d="M0 32H512v96H0V32z" />
    </Icon>
);

export default BoxArchive;