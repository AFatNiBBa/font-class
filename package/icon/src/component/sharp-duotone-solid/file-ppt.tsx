
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-ppt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-ppt?s=sharp-duotone-solid file-ppt}
 * @preview ![file-ppt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-ppt.svg)
 */
const FilePpt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM288 352l0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0-16 0zm32 80l0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0zM160 352l0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0-16 0zm32 80l0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0zm224-80l0 32 16 0 16 0 0 112 0 16 32 0 0-16 0-112 16 0 16 0 0-32-16 0-32 0-32 0-16 0z" />
    </Icon>
);

export default FilePpt;