
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=sharp-light bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0 242c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-242 0-16 32 0 0 16zM224 320a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM480 160l-96 0 0 160c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-160-96 0 0 320 448 0 0-320zM128 128l32 0 0 32 0 160c0 53 43 96 96 96s96-43 96-96l0-160 0-32 32 0 96 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32 32 0 96 0z" />
    </Icon>
);

export default BoreHole;