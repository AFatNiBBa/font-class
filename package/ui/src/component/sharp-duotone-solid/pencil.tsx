
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pencil` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=sharp-duotone-solid pencil}
 * @preview ![pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pencil.svg)
 */
const Pencil: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M137.7 319.7L160 342.1l11.3-11.3 144-144 11-11L304 153.4l-11.3 11.3-144 144-11 11zM304 80L432 208c15.4-15.4 30.7-30.7 46.1-46.1L512 128 478.1 94.1 417.9 33.9 384 0 350.1 33.9C334.7 49.3 319.4 64.6 304 80z" />
        <path d="M432 208L304 80 32 352 10.2 461 0 512l51-10.2L160 480 432 208zM136.3 435.8l-75.1 15 15-75.1 24.2-24.2 11.5 0 0 48 48 0 0 12.7-23.7 23.7zM326.6 175.4l-11.3 11.3-144 144L160 342.1l-22.6-22.6 11.3-11.3 144-144L304 152.8l22.6 22.6z" />
    </Icon>
);

export default Pencil;