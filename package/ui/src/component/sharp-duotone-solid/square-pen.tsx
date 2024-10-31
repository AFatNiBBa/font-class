
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-duotone-solid square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 384l16-96L220.7 179.3l80 80L192 368 96 384zM243.3 156.7L288 112l80 80-44.7 44.7-80-80z" />
        <path d="M96 384l16-96L220.7 179.3l80 80L192 368 96 384zM323.3 236.7l-80-80L288 112l80 80-44.7 44.7z" />
    </Icon>
);

export default SquarePen;