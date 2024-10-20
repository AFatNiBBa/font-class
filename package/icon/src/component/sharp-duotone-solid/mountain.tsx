
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-duotone-solid mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M143.1 201.4c21.6 28.9 43.3 57.7 64.9 86.6c16-21.3 32-42.7 48-64c42.7 0 85.3 0 128 0C341.3 160 298.7 96 256 32c-37.6 56.5-75.3 112.9-112.9 169.4z" />
        <path d="M384 224l-128 0-48 64-64.9-86.6L0 416l0 64 512 0 0-64L384 224z" />
    </Icon>
);

export default Mountain;