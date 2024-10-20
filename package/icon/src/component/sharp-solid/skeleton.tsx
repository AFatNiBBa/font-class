
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-solid skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 0 32 128 0 32 0 0 64-32 0-128 0 0 32 192 0 32 0 0 64-32 0-192 0 0 32 96 0 32 0 0 64-32 0-96 0 0 64 0 2.3L368 352l80 0 0 96-64 64-256 0L64 448l0-96 80 0 80 34.3 0-2.3 0-64-96 0-32 0 0-64 32 0 96 0 0-32L32 224 0 224l0-64 32 0 192 0 0-32L96 128l-32 0 0-64 32 0 128 0 0-32 0-32 64 0zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Skeleton;