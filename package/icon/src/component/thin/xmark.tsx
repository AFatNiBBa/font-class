
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=thin xmark}
 * @preview ![xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/xmark.svg)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z" />
    </Icon>
);

export default Xmark;