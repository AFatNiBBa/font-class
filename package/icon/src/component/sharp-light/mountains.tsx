
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-light mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 448l448 0 0-30.1L256 88.9 32 417.9 32 448zM0 448l0-40L236.6 60.4 256 32l19.4 28.4L412.5 261.9 460.8 189 480 160l19.2 29L640 401.7l0 46.3 0 32-32 0-96 0-32 0-23 0L32 480 0 480l0-32zm512 0l96 0 0-36.7L480 218l-48 72.5L512 408l0 40z" />
    </Icon>
);

export default Mountains;