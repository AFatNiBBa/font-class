
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-solid expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64L0 64 0 96l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 64zM64 320l0-32L0 288l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM384 64l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM512 320l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z" />
    </Icon>
);

export default ExpandWide;