
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-line?s=thin arrow-left-to-line}
 * @preview ![arrow-left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-left-to-line.svg)
 */
const ArrowLeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 440c0 4.4 3.6 8 8 8s8-3.6 8-8L16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 440zM98.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l136 136c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L123.3 264 440 264c4.4 0 8-3.6 8-8s-3.6-8-8-8l-316.7 0L245.7 125.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-136 136z" />
    </Icon>
);

export default ArrowLeftToLine;