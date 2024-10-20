
import { Icon } from "../../index";

/**
 * A component that renders the `object-group` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=sharp-regular object-group}
 * @preview ![object-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/object-group.svg)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128l16 0 0 256-16 0 0 64 0 32 32 0 64 0 0-16 320 0 0 16 64 0 32 0 0-32 0-64-16 0 0-256 16 0 0-64 0-32-32 0-64 0 0 16L128 48l0-16L64 32 32 32l0 32 0 64zM96 416L96 96l384 0 0 320L96 416zm32-288l0 160 192 0 0-160-192 0zM256 320l0 64 192 0 0-160-96 0 0 64 0 32-32 0-64 0z" />
    </Icon>
);

export default ObjectGroup;