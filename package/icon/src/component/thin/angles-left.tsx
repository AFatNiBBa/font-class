
import { Icon } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=thin angles-left}
 * @preview ![angles-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/angles-left.svg)
 */
const AnglesLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L67.3 256 237.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-176 176zm368-176l-176 176c-3.1 3.1-3.1 8.2 0 11.3l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L259.3 256 429.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default AnglesLeft;