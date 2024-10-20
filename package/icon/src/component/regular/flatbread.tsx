
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=regular flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm361-71L185 361c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L327 151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM241 111c9.4 9.4 9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96c9.4-9.4 24.6-9.4 33.9 0zM401 305l-96 96c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default Flatbread;