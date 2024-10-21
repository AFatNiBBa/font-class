
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-solid x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 448 0 32 0 0 64-32 0 0 320 32 0 0 64-32 0L32 480 0 480l0-64 32 0L32 96 0 96 0 32zM272 96l-32 0 0 16 0 32-80 0-16 0 0 32 16 0 80 0 0 48-112 0-16 0 0 32 16 0 112 0 0 70.6L181.3 304 128 304l0 57.6L170.7 416l170.7 0L384 361.6l0-57.6-53.3 0L272 326.6l0-70.6 112 0 16 0 0-32-16 0-112 0 0-48 80 0 16 0 0-32-16 0-80 0 0-32 0-16zM208 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default XRay;