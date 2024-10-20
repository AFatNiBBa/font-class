
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-solid monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0L96 96 56 416l272 0L288 96 192 0zm64 320l-128 0 0-48 128 0 0 48zM32 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Monument;