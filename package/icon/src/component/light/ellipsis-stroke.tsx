
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=light ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM256 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM128 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-96 0a64 64 0 1 0 128 0A64 64 0 1 0 32 256z" />
    </Icon>
);

export default EllipsisStroke;