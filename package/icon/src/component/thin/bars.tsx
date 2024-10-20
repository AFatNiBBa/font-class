
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=thin bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 96c-4.4 0-8-3.6-8-8zM0 248c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 256c-4.4 0-8-3.6-8-8zM448 408c0 4.4-3.6 8-8 8L8 416c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default Bars;