
import { Icon } from "../../index";

/**
 * A component that renders the `square-o` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=regular square-o}
 * @preview ![square-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-o.svg)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM144 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 128a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default SquareO;