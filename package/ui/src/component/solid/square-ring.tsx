
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=solid square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 224a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320z" />
    </Icon>
);

export default SquareRing;