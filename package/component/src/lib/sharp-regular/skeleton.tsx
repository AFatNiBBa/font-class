
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-regular skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0l0 24 0 40 144 0 24 0 0 48-24 0-144 0 0 48 208 0 24 0 0 48-24 0-208 0 0 48 112 0 24 0 0 48-24 0-112 0 0 85.7L368 352l80 0 0 96-64 64-256 0L64 448l0-96 80 0 88 37.7 0-85.7-112 0-24 0 0-48 24 0 112 0 0-48L24 208 0 208l0-48 24 0 208 0 0-48L88 112l-24 0 0-48 24 0 144 0 0-40 0-24 48 0zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Skeleton;