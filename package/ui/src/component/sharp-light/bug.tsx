
import { Icon } from "../../index";

/**
 * A component that renders the `bug` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=sharp-light bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c-35.3 0-64 28.7-64 64l128 0c0-35.3-28.7-64-64-64zM160 96c0-53 43-96 96-96s96 43 96 96l0 32-32 0-128 0-32 0 0-32zM48 89.4l11.3 11.3L118.6 160l9.4 0 256 0 9.4 0 59.3-59.3L464 89.4 486.6 112l-11.3 11.3L416 182.6l0 9.4 0 80 80 0 16 0 0 32-16 0-80 0 0 16c0 30.2-8.4 58.4-22.9 82.5l74.2 74.2L478.6 488 456 510.6l-11.3-11.3-71-71C344.5 460.1 302.6 480 256 480s-88.5-19.9-117.7-51.6l-71 71L56 510.6 33.4 488l11.3-11.3 74.2-74.2C104.4 378.4 96 350.2 96 320l0-16-80 0L0 304l0-32 16 0 80 0 0-80 0-9.4L36.7 123.3 25.4 112 48 89.4zM128 304l0 16c0 65.3 48.9 119.1 112 127l0-191 0-16 32 0 0 16 0 191c63.1-7.9 112-61.7 112-127l0-16 0-32 0-80-256 0 0 80 0 32z" />
    </Icon>
);

export default Bug;