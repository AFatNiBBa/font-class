
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=thin square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm160 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM144 256a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm176 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default SquareRing;