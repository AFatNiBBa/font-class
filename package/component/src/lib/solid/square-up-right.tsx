
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=solid square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l40 40-71 71C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l71-71 40 40c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-144c0-8.8-7.2-16-16-16l-144 0z" />
    </Icon>
);

export default SquareUpRight;