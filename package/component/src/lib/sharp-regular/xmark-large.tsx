
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=sharp-regular xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M52.2 50.2l-17-17L1.3 67.2l17 17L190.1 256 18.2 427.8l-17 17 33.9 33.9 17-17L224 289.9 395.8 461.8l17 17 33.9-33.9-17-17L257.9 256 429.8 84.2l17-17L412.8 33.3l-17 17L224 222.1 52.2 50.2z" />
    </Icon>
);

export default XmarkLarge;