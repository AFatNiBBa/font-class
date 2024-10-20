
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-thin expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120 64l8 0 0 16-8 0L16 80l0 104 0 8L0 192l0-8L0 72l0-8 8 0 112 0zM0 328l0-8 16 0 0 8 0 104 104 0 8 0 0 16-8 0L8 448l-8 0 0-8L0 328zM392 64l112 0 8 0 0 8 0 112 0 8-16 0 0-8 0-104L392 80l-8 0 0-16 8 0zM512 328l0 112 0 8-8 0-112 0-8 0 0-16 8 0 104 0 0-104 0-8 16 0 0 8z" />
    </Icon>
);

export default ExpandWide;