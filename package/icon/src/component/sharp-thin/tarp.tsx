
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-thin tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 80l544 0 0 192-152 0-8 0 0 8 0 152L16 432 16 80zM553.4 288L416 425.4 416 288l137.4 0zm22.6 0l0-208 0-16-16 0L16 64 0 64 0 80 0 432l0 16 16 0 400 0L576 288zM104 152a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM88 120a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Tarp;