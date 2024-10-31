
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrows-rotate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrows-rotate?s=duotone magnifying-glass-arrows-rotate}
 * @preview ![magnifying-glass-arrows-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-arrows-rotate.svg)
 */
const MagnifyingGlassArrowsRotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M12 144c0 12.8 7.7 24.9 20.4 29.8c3.6 1.4 7.3 2.1 10.9 2.2l1.5 0c12.5-.3 24.2-8 29.1-20.4C94.8 101.9 147 64 208 64c35.2 0 67.4 12.6 92.5 33.6l45.4-45.4C309.1 19.7 260.9 0 208 0C119.8 0 44.4 54.9 14.2 132.4c-1.5 3.8-2.2 7.8-2.2 11.6zM70.2 363.8c36.7 32.5 85 52.2 137.8 52.2c45.9 0 88.3-14.9 122.7-40L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6L376 330.7c10.5-14.4 19.3-30.2 25.8-47.1c6.4-16.5-1.7-35-18.2-41.4c-3.6-1.4-7.3-2.1-10.9-2.2l-1.5 0c-12.5 .3-24.2 8-29.1 20.4C321.2 314.1 269 352 208 352c-35.2 0-67.4-12.6-92.5-33.6L70.2 363.8z" />
        <path d="M280 176l112 0c13.3 0 24-10.7 24-24l0-112c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L263 135c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8zm88-48s0 0 0 0l-30.1 0s0 0 0 0l30.1 0zM136 240L24 240c-13.3 0-24 10.7-24 24L0 376c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L153 281c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8z" />
    </Icon>
);

export default MagnifyingGlassArrowsRotate;