
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=light tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448l0-256c0-88.4-71.6-160-160-160S64 103.6 64 192l0 256-32 0 0-256C32 86 118 0 224 0S416 86 416 192l0 256-32 0zM0 496c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-8.8 0-16-7.2-16-16zM240 144l0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Tombstone;