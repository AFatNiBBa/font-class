
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-duotone-solid bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 224L64 480l0-224c-35.3 0-64-28.7-64-64zm128 96l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm96 0l0 32 32 0 0-32-32 0z" />
        <path d="M128 288l32 0 0 32-32 0 0-32zm0 96l32 0 0 32-32 0 0-32zm128 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default BreadSlice;