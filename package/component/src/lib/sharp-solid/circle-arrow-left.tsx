
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-solid circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM103 239L215 127l17-17L265.9 144l-17 17-71 71L392 232l24 0 0 48-24 0-214.1 0 71 71 17 17L232 401.9l-17-17L103 273l-17-17 17-17z" />
    </Icon>
);

export default CircleArrowLeft;