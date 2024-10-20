
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=thin plus}
 * @preview ![plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plus.svg)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 176L40 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0 0 176c0 4.4 3.6 8 8 8s8-3.6 8-8l0-176 176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0 0-176z" />
    </Icon>
);

export default Plus;