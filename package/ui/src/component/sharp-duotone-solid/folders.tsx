
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-duotone-solid folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96z" />
        <path d="M96 384H576V96H368L304 32H96V384z" />
    </Icon>
);

export default Folders;