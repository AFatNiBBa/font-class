
import { Icon } from "../../index";

/**
 * A component that renders the `album` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=sharp-light album}
 * @preview ![album](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/album.svg)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zm192 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 288a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm0-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Album;