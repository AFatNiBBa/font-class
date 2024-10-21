
import { Icon } from "../../index";

/**
 * A component that renders the `display-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-code?s=sharp-solid display-code}
 * @preview ![display-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/display-code.svg)
 */
const DisplayCode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L576 0l0 416-240 0 10.7 32 69.3 0 32 0 0 64-32 0-256 0-32 0 0-64 32 0 69.3 0L240 416 0 416 0 0zM64 64l0 288 448 0 0-288L64 64zM249 177l-31 31 31 31 17 17L232 289.9l-17-17-48-48-17-17 17-17 48-48 17-17L265.9 160l-17 17zM361 143l48 48 17 17-17 17-48 48-17 17L310.1 256l17-17 31-31-31-31-17-17L344 126.1l17 17z" />
    </Icon>
);

export default DisplayCode;