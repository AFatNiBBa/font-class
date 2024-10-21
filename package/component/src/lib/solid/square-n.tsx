
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=solid square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.3 104.5L288 294.5 288 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.1-6.3 19.1-15.7 22.5s-20.1 .7-26.6-7L160 217.5 160 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7z" />
    </Icon>
);

export default SquareN;