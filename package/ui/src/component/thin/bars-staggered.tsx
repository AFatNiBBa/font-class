
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=thin bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 88c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 96c-4.4 0-8-3.6-8-8zM64 248c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 256c-4.4 0-8-3.6-8-8zM448 408c0 4.4-3.6 8-8 8L8 416c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default BarsStaggered;