
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-duotone-solid file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-352-160 0L224 0 0 0z" />
        <path d="M224 0L384 160H224V0z" />
    </Icon>
);

export default File;