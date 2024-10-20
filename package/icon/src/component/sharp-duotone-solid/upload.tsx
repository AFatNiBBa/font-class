
import { Icon, generic } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-duotone-solid upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 512l512 0 0-160-224 0 0 32 0 32-64 0 0-32 0-32L0 352zm456 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M288 416l0-32 0-258.7 65.4 65.4L376 213.3 421.3 168l-22.6-22.6-120-120L256 2.7 233.4 25.4l-120 120L90.7 168 136 213.3l22.6-22.6L224 125.3 224 384l0 32 64 0z" />
    </Icon>
);

export default Upload;