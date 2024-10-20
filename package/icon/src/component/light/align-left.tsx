
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=light align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48C7.2 48 0 55.2 0 64s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 48zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 176zM0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 304c-8.8 0-16 7.2-16 16zM16 432c-8.8 0-16 7.2-16 16s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 432z" />
    </Icon>
);

export default AlignLeft;