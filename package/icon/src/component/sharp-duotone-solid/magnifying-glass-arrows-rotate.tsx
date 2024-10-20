
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrows-rotate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrows-rotate?s=sharp-duotone-solid magnifying-glass-arrows-rotate}
 * @preview ![magnifying-glass-arrows-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-arrows-rotate.svg)
 */
const MagnifyingGlassArrowsRotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.4 176l65.1 0C82.1 111.9 139.5 64 208 64c35.7 0 68.4 13 93.5 34.5c15.1-15.1 30.2-30.2 45.3-45.4C310 20.1 261.4 0 208 0C104 0 17.8 76.3 2.4 176zM69.1 362.9C106 395.9 154.6 416 208 416c45.9 0 88.3-14.9 122.7-40L441.4 486.6 464 509.3 509.3 464l-22.6-22.6L376 330.7c19.2-26.2 32.4-57.2 37.6-90.7l-65.1 0C333.9 304.1 276.5 352 208 352c-35.7 0-68.4-13-93.5-34.5L69.1 362.9z" />
        <path d="M248 152l24 24 144 0 0-144L392 8 248 152zM168 264l-24-24L0 240 0 384l24 24L168 264z" />
    </Icon>
);

export default MagnifyingGlassArrowsRotate;