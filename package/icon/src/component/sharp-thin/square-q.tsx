
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=sharp-thin square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM112 256c0 61.9 50.1 112 112 112c27.8 0 53.2-10.1 72.7-26.8L220.4 256l21.5 0 66.3 73.9C325.5 310.2 336 284.3 336 256c0-61.9-50.1-112-112-112s-112 50.1-112 112zm240 0c0 33.1-12.5 63.2-33.1 85.9L356.6 384l-21.5 0-27.7-30.9C285 372.4 255.9 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default SquareQ;