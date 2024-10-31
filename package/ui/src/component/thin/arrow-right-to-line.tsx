
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=thin arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 368c0 4.4 3.6 8 8 8s8-3.6 8-8l0-368zM349.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-136-136c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L324.7 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l316.7 0L202.3 386.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l136-136z" />
    </Icon>
);

export default ArrowRightToLine;