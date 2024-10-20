
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-solid box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32L320 64 576 32l64 128-64 18.3L416 224l-57.6-96L320 64l-38.4 64L224 224 64 178.3 0 160 64 32zm0 384l0-204.4 151.2 43.2 23.6 6.7 12.6-21L318.9 128l2.2 0 67.5 112.5 12.6 21 23.6-6.7L576 211.6 576 416 320 480 64 416z" />
    </Icon>
);

export default BoxOpen;