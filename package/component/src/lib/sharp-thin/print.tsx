
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-thin print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 160l-16 0L64 16 64 0 80 0 384 0l64 64 0 96-16 0 0-89.4L377.4 16 80 16l0 144zm416 48L16 208l0 192 48 0 0-64 0-16 16 0 352 0 16 0 0 16 0 64 48 0 0-192zM448 416l0 80 0 16-16 0L80 512l-16 0 0-16 0-80-48 0L0 416l0-16L0 208l0-16 16 0 480 0 16 0 0 16 0 192 0 16-16 0-48 0zM80 336l0 160 352 0 0-160L80 336zm368-48l-32 0 0-32 32 0 0 32z" />
    </Icon>
);

export default Print;