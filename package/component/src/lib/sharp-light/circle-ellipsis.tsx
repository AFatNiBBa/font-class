
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-light circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM184 232l0 48-48 0 0-48 48 0zm192 0l0 48-48 0 0-48 48 0zm-144 0l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default CircleEllipsis;