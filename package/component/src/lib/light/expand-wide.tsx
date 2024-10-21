
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=light expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 64c8.8 0 16 7.2 16 16s-7.2 16-16 16L32 96l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 80c0-8.8 7.2-16 16-16l128 0zM0 304c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 448c-8.8 0-16-7.2-16-16L0 304zM496 64c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112L368 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0zM480 304c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-112z" />
    </Icon>
);

export default ExpandWide;