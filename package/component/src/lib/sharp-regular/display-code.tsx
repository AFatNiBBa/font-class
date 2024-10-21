
import { Icon } from "../../index";

/**
 * A component that renders the `display-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-code?s=sharp-regular display-code}
 * @preview ![display-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/display-code.svg)
 */
const DisplayCode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 48L48 48l0 320 480 0 0-320zM48 416L0 416l0-48L0 48 0 0 48 0 528 0l48 0 0 48 0 320 0 48-48 0-163.7 0 8 48 51.7 0 24 0 0 48-24 0-72 0-128 0-72 0-24 0 0-48 24 0 51.7 0 8-48L48 416zm212.3 0l-8 48 71.3 0-8-48-55.3 0zM249 177l-31 31 31 31 17 17L232 289.9l-17-17-48-48-17-17 17-17 48-48 17-17L265.9 160l-17 17zM361 143l48 48 17 17-17 17-48 48-17 17L310.1 256l17-17 31-31-31-31-17-17L344 126.1l17 17z" />
    </Icon>
);

export default DisplayCode;