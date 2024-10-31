
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-duotone-solid expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64 0-32L0 288zM352 64l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0-32 0z" />
        <path d="M0 192l0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 64 0 64 0 96l0 96zM512 320l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z" />
    </Icon>
);

export default ExpandWide;