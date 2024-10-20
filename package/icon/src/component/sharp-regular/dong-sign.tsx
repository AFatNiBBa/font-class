
import { Icon } from "../../index";

/**
 * A component that renders the `dong-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dong-sign?s=sharp-regular dong-sign}
 * @preview ![dong-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dong-sign.svg)
 */
const DongSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l-48 0 0 32-80 0 0 48 80 0 0 76.1c-21.9-17.6-49.7-28.1-80-28.1c-70.7 0-128 57.3-128 128s57.3 128 128 128c30.3 0 58.1-10.5 80-28.1l0 28.1 48 0 0-128 0-176 32 0 0-48-32 0 0-32zM112 288a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM384 496l0-48L0 448l0 48 384 0z" />
    </Icon>
);

export default DongSign;