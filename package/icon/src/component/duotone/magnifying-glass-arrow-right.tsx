
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrow-right?s=duotone magnifying-glass-arrow-right}
 * @preview ![magnifying-glass-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-arrow-right.svg)
 */
const MagnifyingGlassArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm96 0c0-13.3 10.7-24 24-24l118.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31L120 232c-13.3 0-24-10.7-24-24z" />
        <path d="M241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31L120 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l118.1 0-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72zM457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376L457.4 502.6z" />
    </Icon>
);

export default MagnifyingGlassArrowRight;