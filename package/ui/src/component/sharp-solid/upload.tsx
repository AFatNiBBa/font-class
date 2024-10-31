
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-solid upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 352l0 32-64 0 0-32 0-226.7-65.4 65.4L136 213.3 90.7 168l22.6-22.6 120-120L256 2.7l22.6 22.6 120 120L421.3 168 376 213.3l-22.6-22.6L288 125.3 288 352zm32 64l0-64 192 0 0 160L0 512 0 352l192 0 0 64 128 0zm112 40a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Upload;