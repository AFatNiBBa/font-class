
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-regular upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 360l0 24-48 0 0-24 0-262.1-95 95-17 17L86.1 176l17-17L239 23l17-17 17 17L409 159l17 17L392 209.9l-17-17-95-95L280 360zm32-8l0-48 152 0 48 0 0 48 0 112 0 48-48 0L48 512 0 512l0-48L0 352l0-48 48 0 152 0 0 48L48 352l0 112 416 0 0-112-152 0zm72 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Upload;