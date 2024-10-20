
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=duotone bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-80 0c-17.7 0-32 14.3-32 32l0 192c0 53-43 96-96 96s-96-43-96-96l0-192c0-17.7-14.3-32-32-32l-80 0c-26.5 0-48 21.5-48 48z" />
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32z" />
    </Icon>
);

export default BoreHole;