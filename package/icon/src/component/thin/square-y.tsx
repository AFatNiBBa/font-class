
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=thin square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm110 34.7L224 259.9 338 130.7c2.9-3.3 8-3.6 11.3-.7s3.6 8 .7 11.3L232 275l0 101c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-101L98 141.3c-2.9-3.3-2.6-8.4 .7-11.3s8.4-2.6 11.3 .7z" />
    </Icon>
);

export default SquareY;