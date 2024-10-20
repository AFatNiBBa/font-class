
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=solid square-down-left}
 * @preview ![square-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-down-left.svg)
 */
const SquareDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zM288 352c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-40-40 71-71c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-36.7-36.7C290 146 285.1 144 280 144s-10 2-13.7 5.7l-71 71-40-40c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 144c0 8.8 7.2 16 16 16l144 0z" />
    </Icon>
);

export default SquareDownLeft;