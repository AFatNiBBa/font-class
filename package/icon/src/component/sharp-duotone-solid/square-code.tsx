
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=sharp-duotone-solid square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM62.1 256c5.7-5.7 11.3-11.3 17-17l64-64c5.7-5.7 11.3-11.3 17-17L193.9 192c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47l47 47 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-21.3-21.3-42.7-42.7-64-64l-17-17zm192-64c11.3-11.3 22.6-22.6 33.9-33.9l17 17c21.3 21.3 42.7 42.7 64 64c5.7 5.7 11.3 11.3 17 17c-5.7 5.7-11.3 11.3-17 17c-21.3 21.3-42.7 42.7-64 64c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47l-17-17z" />
        <path d="M193.9 192l-17 17-47 47 47 47 17 17L160 353.9l-17-17L79 273l-17-17 17-17 64-64 17-17L193.9 192zM288 158.1l17 17 64 64 17 17-17 17-64 64-17 17L254.1 320l17-17 47-47-47-47-17-17L288 158.1z" />
    </Icon>
);

export default SquareCode;