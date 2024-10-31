
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-regular flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM177 369L143 335 335 143 369 177 177 369zm64-224l-96 96L111 207l96-96L241 145zm64 256L271 367l96-96L401 305l-96 96z" />
    </Icon>
);

export default Flatbread;