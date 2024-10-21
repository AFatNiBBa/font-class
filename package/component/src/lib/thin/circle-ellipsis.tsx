
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=thin circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm16 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM176 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default CircleEllipsis;