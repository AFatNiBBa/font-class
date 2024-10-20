
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-code?s=sharp-duotone-solid display-code}
 * @preview ![display-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/display-code.svg)
 */
const DisplayCode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 416l240 0 96 0 240 0L576 0 0 0zM64 64l448 0 0 288L64 352 64 64z" />
        <path d="M64 64l448 0 0 288L64 352 64 64zM346.7 448l69.3 0 32 0 0 64-32 0-256 0-32 0 0-64 32 0 69.3 0L240 416l96 0 10.7 32zM249 177l17-17L232 126.1l-17 17-48 48-17 17 17 17 48 48 17 17L265.9 256l-17-17-31-31 31-31zM361 143l-17-17L310.1 160l17 17 31 31-31 31-17 17L344 289.9l17-17 48-48 17-17-17-17-48-48z" />
    </Icon>
);

export default DisplayCode;