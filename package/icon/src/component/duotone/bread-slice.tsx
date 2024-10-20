
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=duotone bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-176c-35.3 0-64-28.7-64-64zM128 304a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M144 384a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-96a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm96 96a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default BreadSlice;