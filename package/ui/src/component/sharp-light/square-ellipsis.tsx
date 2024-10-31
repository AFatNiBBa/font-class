
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=sharp-light square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM152 232l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default SquareEllipsis;