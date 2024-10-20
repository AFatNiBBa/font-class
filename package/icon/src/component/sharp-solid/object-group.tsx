
import { Icon } from "../../index";

/**
 * A component that renders the `object-group` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=sharp-solid object-group}
 * @preview ![object-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/object-group.svg)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128L0 64 0 0 64 0l64 0 0 32 320 0 0-32 64 0 64 0 0 64 0 64-32 0 0 256 32 0 0 64 0 64-64 0-64 0 0-32-320 0 0 32-64 0L0 512l0-64 0-64 32 0 0-256L0 128zM96 416l384 0 0-320L96 96l0 320zm32-288l192 0 0 160-192 0 0-160zM256 320l64 0 32 0 0-32 0-64 96 0 0 160-192 0 0-64z" />
    </Icon>
);

export default ObjectGroup;