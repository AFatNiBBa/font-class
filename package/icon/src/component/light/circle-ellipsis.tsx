
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=light circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
    </Icon>
);

export default CircleEllipsis;