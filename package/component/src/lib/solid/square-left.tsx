
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=solid square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM84.7 267.3l112 112c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-64 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-112 112c-6.2 6.2-6.2 16.4 0 22.6z" />
    </Icon>
);

export default SquareLeft;