
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=regular square-down-right}
 * @preview ![square-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-down-right.svg)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM320 198.6L320 336c0 8.8-7.2 16-16 16l-137.4 0c-12.5 0-22.6-10.1-22.6-22.6c0-6 2.4-11.8 6.6-16L184 280l-66.3-66.3C114 210 112 205.1 112 200s2-10 5.7-13.7l36.7-36.7c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7L248 216l33.4-33.4c4.2-4.2 10-6.6 16-6.6c12.5 0 22.6 10.1 22.6 22.6z" />
    </Icon>
);

export default SquareDownRight;