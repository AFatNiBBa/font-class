
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-solid circle-ellipsis}
 * @preview ![circle-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-ellipsis.svg)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 224l0 64-64 0 0-64 64 0zm192 0l0 64-64 0 0-64 64 0zm-160 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default CircleEllipsis;