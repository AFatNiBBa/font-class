
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-thin mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 464l479.8 0 .2 0 0-51.1L256 60.4 16 412.9 16 464zm441 16L16 480 0 480l0-16 0-56L246.3 46.2 256 32l9.7 14.2L412.5 261.9l57.9-87.4L480 160l9.6 14.5L640 401.7l0 62.3 0 16-16 0-112 0-16 0-39 0zm55-16l112 0 0-57.5L480 189l-57.7 87.2L512 408l0 56z" />
    </Icon>
);

export default Mountains;