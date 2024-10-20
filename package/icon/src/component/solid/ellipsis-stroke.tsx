
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=solid ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144zM256 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144zM120 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-96 0a72 72 0 1 0 144 0A72 72 0 1 0 24 256z" />
    </Icon>
);

export default EllipsisStroke;