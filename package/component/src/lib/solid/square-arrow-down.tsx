
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=solid square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm177-71L353 297c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71L248 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 214.1-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 409c9.4 9.4 24.6 9.4 33.9 0z" />
    </Icon>
);

export default SquareArrowDown;