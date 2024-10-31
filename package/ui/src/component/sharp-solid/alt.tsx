
import { Icon } from "../../index";

/**
 * A component that renders the `alt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=sharp-solid alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 64l-15.4 0L423 76 176.6 384 32 384 0 384l0 64 32 0 160 0 15.4 0 9.6-12L463.4 128 608 128l32 0 0-64-32 0L448 64zm0 320l-32 0 0 64 32 0 160 0 32 0 0-64-32 0-160 0z" />
    </Icon>
);

export default Alt;