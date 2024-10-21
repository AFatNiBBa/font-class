
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=thin arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M165.7 2.3c-3-3-7.9-3.1-11.1-.2l-112 104c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3 .4L152 26.3l0 458.3L61.7 394.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L168 484.7l0-457.4 90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-104-104z" />
    </Icon>
);

export default ArrowsUpDown;