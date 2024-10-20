
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-solid square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l64 0 320 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32zM64 96L224 256 384 96 64 96zm0 320l320 0L224 256 64 416z" />
    </Icon>
);

export default SquareQuarters;