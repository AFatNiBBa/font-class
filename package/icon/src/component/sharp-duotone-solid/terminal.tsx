
import { Icon, generic } from "../../index";

/**
 * A component that renders the `terminal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=sharp-duotone-solid terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 416l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
        <path d="M-.5 76.8L22.2 99.4 178.7 256 22.2 412.6-.5 435.2l45.3 45.3 22.6-22.6L246.6 278.6 269.3 256l-22.6-22.6L67.4 54.2 44.8 31.5-.5 76.8z" />
    </Icon>
);

export default Terminal;