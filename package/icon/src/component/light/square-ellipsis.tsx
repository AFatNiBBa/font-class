
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=light square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 416c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320zm32 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zM200 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-72 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm168-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default SquareEllipsis;