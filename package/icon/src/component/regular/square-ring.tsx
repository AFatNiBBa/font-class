
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=regular square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM304 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 256a128 128 0 1 1 256 0A128 128 0 1 1 96 256z" />
    </Icon>
);

export default SquareRing;