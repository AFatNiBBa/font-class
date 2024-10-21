
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-light flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM171.3 363.3l-22.6-22.6 192-192 22.6 22.6-192 192zm80-240l-128 128-22.6-22.6 128-128 22.6 22.6zm32 288l-22.6-22.6 128-128 22.6 22.6-128 128z" />
    </Icon>
);

export default Flatbread;