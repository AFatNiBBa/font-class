
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=thin square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM112 256c0 61.9 50.1 112 112 112c28 0 53.7-10.3 73.3-27.3l-61.9-61.9c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l61.9 61.9C325.7 309.7 336 284 336 256c0-61.9-50.1-112-112-112s-112 50.1-112 112zm240 0c0 32.5-12.1 62.1-32 84.7l29.7 29.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L308.7 352c-22.6 19.9-52.2 32-84.7 32c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default SquareQ;