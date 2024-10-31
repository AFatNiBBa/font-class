
import { Icon } from "../../index";

/**
 * A component that renders the `square-7` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-7?s=sharp-solid square-7}
 * @preview ![square-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-7.svg)
 */
const Square_7: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM296 128l24 0 0 29.4-2.3 4.9L213.5 384l-53 0 3.9-8.2L258.2 176 152 176l-24 0 0-48 24 0 144 0z" />
    </Icon>
);

export default Square_7;