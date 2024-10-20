
import { Icon } from "../../index";

/**
 * A component that renders the `dong-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dong-sign?s=sharp-thin dong-sign}
 * @preview ![dong-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dong-sign.svg)
 */
const DongSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l-16 0 0 48L192 80l0 16 112 0 0 130c-21.8-39.4-63.8-66-112-66c-70.7 0-128 57.3-128 128s57.3 128 128 128c48.2 0 90.2-26.6 112-66l0 66 16 0 0-128 0-192 32 0 0-16-32 0 0-48zM80 288a112 112 0 1 1 224 0A112 112 0 1 1 80 288zM384 480l0-16L0 464l0 16 384 0z" />
    </Icon>
);

export default DongSign;