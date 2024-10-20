
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-large` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-large?s=thin xmark-large}
 * @preview ![xmark-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/xmark-large.svg)
 */
const XmarkLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M13.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L212.7 256 2.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 267.3 434.3 477.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L235.3 256 445.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 244.7 13.7 34.3z" />
    </Icon>
);

export default XmarkLarge;