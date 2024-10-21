
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=thin outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64c0 4.4 3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 56c-4.4 0-8 3.6-8 8zM192 192c0 4.4 3.6 8 8 8l240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-240 0c-4.4 0-8 3.6-8 8zm8 120c-4.4 0-8 3.6-8 8s3.6 8 8 8l240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-240 0zM0 448c0 4.4 3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 440c-4.4 0-8 3.6-8 8zM17.2 256L112 177.9l0 156.2L17.2 256zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4l0-156.2c0-13.5-15.7-20.9-26.2-12.4L7 243.6z" />
    </Icon>
);

export default Outdent;