
import { Icon } from "../../index";

/**
 * A component that renders the `square-g` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=thin square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM112 256c0 61.9 50.1 112 112 112c59.2 0 107.6-45.9 111.7-104l-77.4 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l77.7 0c8.7 0 16.3 7.2 15.7 16.5C347.3 331.2 291.8 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6c3.3 2.9 3.6 8 .6 11.3s-8 3.6-11.3 .6c-19.8-17.7-46-28.5-74.7-28.5c-61.9 0-112 50.1-112 112z" />
    </Icon>
);

export default SquareG;