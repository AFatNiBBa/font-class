
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=sharp-regular square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l352 0 0-352L48 80l0 352zM0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480zM160 224l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SquareEllipsis;