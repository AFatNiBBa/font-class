
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=sharp-solid square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM160 224l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SquareEllipsis;