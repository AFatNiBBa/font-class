
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=solid bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-17.7 0-32 14.3-32 32l0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32c0-17.7-14.3-32-32-32zM48 128c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-80 0c-17.7 0-32 14.3-32 32l0 192c0 53-43 96-96 96s-96-43-96-96l0-192c0-17.7-14.3-32-32-32l-80 0z" />
    </Icon>
);

export default BoreHole;