
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-solid tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l384 0 0 64L0 96 0 32zM224 160l160 0 0 64-160 0 0 256-64 0 0-256L0 224l0-64 160 0 64 0z" />
    </Icon>
);

export default TengeSign;