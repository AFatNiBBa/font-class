
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-solid square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM112 288L220.7 179.3l80 80L192 368 96 384l16-96zm256-96l-44.7 44.7-80-80L288 112l80 80z" />
    </Icon>
);

export default SquarePen;