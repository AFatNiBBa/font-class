
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=sharp-thin xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 267.3L13.7 477.7 2.3 466.3 212.7 256 2.3 45.7 13.7 34.3 224 244.7 434.3 34.3l11.3 11.3L235.3 256 445.7 466.3l-11.3 11.3L224 267.3z" />
    </Icon>
);

export default XmarkLarge;