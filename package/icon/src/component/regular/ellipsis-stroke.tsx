
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=regular ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM256 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM120 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-88 0a64 64 0 1 0 128 0A64 64 0 1 0 32 256z" />
    </Icon>
);

export default EllipsisStroke;