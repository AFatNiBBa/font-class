
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-duotone-solid pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 464l24 0 304 0 24 0 0 48-24 0-304 0-24 0 0-48zM288 96L384 0 512 128l-96 96L288 96z" />
        <path d="M32 352L0 512l160-32L416 224 288 96 32 352z" />
    </Icon>
);

export default PenLine;