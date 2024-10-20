
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice-butter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice-butter?s=sharp-duotone-solid bread-slice-butter}
 * @preview ![bread-slice-butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bread-slice-butter.svg)
 */
const BreadSliceButter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M168 288l88 88 88-88-88-88-88 88z" />
        <path d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 224L64 480l0-224c-35.3 0-64-28.7-64-64zM256 376l88-88-88-88-88 88 88 88z" />
    </Icon>
);

export default BreadSliceButter;