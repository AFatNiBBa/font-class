
import { Icon } from "../../index";

/**
 * A component that renders the `hill-rockslide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hill-rockslide?s=sharp-solid hill-rockslide}
 * @preview ![hill-rockslide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hill-rockslide.svg)
 */
const HillRockslide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 512l480 0L0 32 0 512zM160 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm88 0l36 64 72 0 36-64L356 32l-72 0L248 96zM576 372l0-72-64-36-64 36 0 72 64 36 64-36zM416 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HillRockslide;