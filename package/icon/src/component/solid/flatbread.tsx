
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=solid flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 171.3l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm-112-70.6c6.2 6.2 6.2 16.4 0 22.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0zm160 182.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default Flatbread;