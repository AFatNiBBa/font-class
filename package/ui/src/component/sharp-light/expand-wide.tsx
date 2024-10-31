
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-light expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 64l16 0 0 32-16 0L32 96l0 112 0 16L0 224l0-16L0 80 0 64l16 0 128 0zM0 304l0-16 32 0 0 16 0 112 112 0 16 0 0 32-16 0L16 448 0 448l0-16L0 304zM496 64l16 0 0 16 0 128 0 16-32 0 0-16 0-112L368 96l-16 0 0-32 16 0 128 0zM480 304l0-16 32 0 0 16 0 128 0 16-16 0-128 0-16 0 0-32 16 0 112 0 0-112z" />
    </Icon>
);

export default ExpandWide;