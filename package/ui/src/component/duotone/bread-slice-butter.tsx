
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice-butter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice-butter?s=duotone bread-slice-butter}
 * @preview ![bread-slice-butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bread-slice-butter.svg)
 */
const BreadSliceButter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M173.3 288c0 8.2 3.1 16.4 9.4 22.6l50.7 50.7c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c16.9-16.9 33.8-33.8 50.7-50.7c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-16.9-16.9-33.8-33.8-50.7-50.7c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-16.9 16.9-33.8 33.8-50.7 50.7c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-176c-35.3 0-64-28.7-64-64zm182.6 73.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0l50.7-50.7c12.5-12.5 12.5-32.8 0-45.3l-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0l-50.7 50.7z" />
    </Icon>
);

export default BreadSliceButter;