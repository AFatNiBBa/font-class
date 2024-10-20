
import { Icon } from "../../index";

/**
 * A component that renders the `square-a` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=sharp-solid square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM208.8 128l30.5 0 6.5 13.8L359.4 384l-53 0-22.5-48-119.7 0-22.5 48-53 0L202.3 141.8l6.5-13.8zM224 208.5L186.7 288l74.6 0L224 208.5z" />
    </Icon>
);

export default SquareA;