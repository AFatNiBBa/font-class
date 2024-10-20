
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=solid expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64C14.3 64 0 78.3 0 96l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64zM64 320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM384 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM512 320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" />
    </Icon>
);

export default ExpandWide;