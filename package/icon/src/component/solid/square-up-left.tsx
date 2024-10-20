
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=solid square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM288 160c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-40 40 71 71c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C290 366 285.1 368 280 368s-10-2-13.7-5.7l-71-71-40 40c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-144c0-8.8 7.2-16 16-16l144 0z" />
    </Icon>
);

export default SquareUpLeft;