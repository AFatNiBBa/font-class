
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-regular expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 64l24 0 0 48-24 0-88 0 0 88 0 24L0 224l0-24L0 88 0 64l24 0 112 0zM0 312l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 448 0 448l0-24L0 312zM488 64l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM464 312l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z" />
    </Icon>
);

export default ExpandWide;