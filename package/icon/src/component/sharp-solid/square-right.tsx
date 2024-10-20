
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-solid square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM224 384l0-80L96 304l0-96 128 0 0-80 16 0L368 256 240 384l-16 0z" />
    </Icon>
);

export default SquareRight;