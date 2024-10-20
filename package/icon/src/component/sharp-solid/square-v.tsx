
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=sharp-solid square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM351.9 144L246 385.6 239.7 400l-31.4 0L202 385.6 96.1 144l52.4 0L224 316.2 299.5 144l52.4 0z" />
    </Icon>
);

export default SquareV;