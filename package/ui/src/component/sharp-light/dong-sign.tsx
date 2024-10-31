
import { Icon } from "../../index";

/**
 * A component that renders the `dong-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dong-sign?s=sharp-light dong-sign}
 * @preview ![dong-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dong-sign.svg)
 */
const DongSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l-32 0 0 32-96 0 0 32 96 0 0 107.3c-23.5-26.6-57.8-43.3-96-43.3c-70.7 0-128 57.3-128 128s57.3 128 128 128c38.2 0 72.5-16.8 96-43.3l0 43.3 32 0 0-128 0-192 32 0 0-32-32 0 0-32zM96 288a96 96 0 1 1 192 0A96 96 0 1 1 96 288zM384 480l0-32L0 448l0 32 384 0z" />
    </Icon>
);

export default DongSign;