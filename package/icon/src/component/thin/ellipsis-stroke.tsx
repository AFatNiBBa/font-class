
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=thin ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM256 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM128 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-80 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
    </Icon>
);

export default EllipsisStroke;