
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-light skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 48 144 0 16 0 0 32-16 0L272 96l0 64 208 0 16 0 0 32-16 0-208 0 0 64 112 0 16 0 0 32-16 0-112 0 0 75.4L368 336l48 0 32 0 0 32 0 72-64 72-256 0L64 440l0-72 0-32 32 0 48 0 96 27.4 0-75.4-112 0-16 0 0-32 16 0 112 0 0-64L32 192l-16 0 0-32 16 0 208 0 0-64L96 96 80 96l0-32 16 0 144 0 0-48 0-16 32 0zM372.5 368L264.8 398.8l-8.8 2.5-8.8-2.5L139.5 368 96 368l0 59.8L142.4 480l227.3 0L416 427.8l0-59.8-43.5 0zM160 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Skeleton;