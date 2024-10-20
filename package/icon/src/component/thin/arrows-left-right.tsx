
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=thin arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M509.7 265.7c3-3 3.1-7.9 .2-11.1l-104-112c-3-3.2-8.1-3.4-11.3-.4s-3.4 8.1-.4 11.3L485.7 252 27.3 252l90.3-90.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-104 104c-3.1 3.1-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 268l457.4 0-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104z" />
    </Icon>
);

export default ArrowsLeftRight;