
import { Icon } from "../../index";

/**
 * A component that renders the `object-group` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=sharp-light object-group}
 * @preview ![object-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/object-group.svg)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64l0 32 16 0 16 0 0-16 0-16L64 64zm0 64l-32 0 0-32 0-32 0-32 32 0 32 0 32 0 0 32 320 0 0-32 32 0 32 0 32 0 0 32 0 32 0 32-32 0 0 256 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32-320 0 0 32-32 0-32 0-32 0 0-32 0-32 0-32 32 0 0-256zM96 448l0-16 0-16-16 0-16 0 0 32 32 0zm32-32l320 0 0-16 0-16 16 0 16 0 0-256-16 0-16 0 0-16 0-16L128 96l0 16 0 16-16 0-16 0 0 256 16 0 16 0 0 16 0 16zm0-288l0 16 0 128 0 16 16 0 160 0 16 0 0-16 0-128 0-16-16 0-160 0-16 0zM448 384l-16 0-160 0-16 0 0-16 0-32 0-16 32 0 0 16 0 16 128 0 0-96-48 0-16 0 0-32 16 0 64 0 16 0 0 16 0 128 0 16zm32 64l32 0 0-32-16 0-16 0 0 16 0 16zm0-384l0 16 0 16 16 0 16 0 0-32-32 0zM160 160l128 0 0 96-128 0 0-96z" />
    </Icon>
);

export default ObjectGroup;