
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=regular square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zm64 16c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 313.4L320 176c0-8.8-7.2-16-16-16l-137.4 0c-12.5 0-22.6 10.1-22.6 22.6c0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6z" />
    </Icon>
);

export default SquareUpRight;