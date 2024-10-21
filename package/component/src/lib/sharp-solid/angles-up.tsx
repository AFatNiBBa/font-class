
import { Icon } from "../../index";

/**
 * A component that renders the `angles-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up?s=sharp-solid angles-up}
 * @preview ![angles-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angles-up.svg)
 */
const AnglesUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M246.6 41.4L224 18.7 201.4 41.4l-160 160L18.7 224 64 269.3l22.6-22.6L224 109.3 361.4 246.6 384 269.3 429.3 224l-22.6-22.6-160-160zm0 192L224 210.7l-22.6 22.6-160 160L18.7 416 64 461.3l22.6-22.6L224 301.3 361.4 438.6 384 461.3 429.3 416l-22.6-22.6-160-160z" />
    </Icon>
);

export default AnglesUp;