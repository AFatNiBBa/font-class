
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=light bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-8.8 0-16 7.2-16 16l0 242c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-242c0-8.8-7.2-16-16-16zm32 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM80 160l48 0 0 160c0 70.7 57.3 128 128 128s128-57.3 128-128l0-160 48 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48zm80 0c0-17.7-14.3-32-32-32l-48 0c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80l-48 0c-17.7 0-32 14.3-32 32l0 160c0 53-43 96-96 96s-96-43-96-96l0-160z" />
    </Icon>
);

export default BoreHole;