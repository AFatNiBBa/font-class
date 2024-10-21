
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code?s=sharp-duotone-solid code}
 * @preview ![code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code.svg)
 */
const Code: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M216 485.2L277.2 504l9.4-30.6 128-416L424 26.8 362.8 8l-9.4 30.6-128 416L216 485.2z" />
        <path d="M434.7 144l22.6 22.6L546.7 256l-89.4 89.4L434.7 368 480 413.3l22.6-22.6 112-112L637.3 256l-22.6-22.6-112-112L480 98.7 434.7 144zM160 98.7l-22.6 22.6-112 112L2.7 256l22.6 22.6 112 112L160 413.3 205.3 368l-22.6-22.6L93.3 256l89.4-89.4L205.3 144 160 98.7z" />
    </Icon>
);

export default Code;