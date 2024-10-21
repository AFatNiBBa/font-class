
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=regular circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm32 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default CircleEllipsis;