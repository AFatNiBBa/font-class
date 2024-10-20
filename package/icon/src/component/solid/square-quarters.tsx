
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=solid square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0L224 256 384 96 64 96zm0 320l320 0L224 256 64 416z" />
    </Icon>
);

export default SquareQuarters;