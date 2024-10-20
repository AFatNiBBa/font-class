
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=thin flatbread}
 * @preview ![flatbread](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flatbread.svg)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm357.7-90.3l-192 192c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l192-192c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zm-112-59.3c3.1 3.1 3.1 8.2 0 11.3l-128 128c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0zm160 171.3l-128 128c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default Flatbread;