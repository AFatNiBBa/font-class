
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=solid square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default SquareEllipsis;