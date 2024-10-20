
import { Icon } from "../../index";

/**
 * A component that renders the `square-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=sharp-solid square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM177 209l-47 47 47 47 17 17L160 353.9l-17-17L79 273l-17-17 17-17 64-64 17-17L193.9 192l-17 17zM305 175l64 64 17 17-17 17-64 64-17 17L254.1 320l17-17 47-47-47-47-17-17L288 158.1l17 17z" />
    </Icon>
);

export default SquareCode;