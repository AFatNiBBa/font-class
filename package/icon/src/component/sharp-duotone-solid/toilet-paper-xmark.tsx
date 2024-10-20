
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-xmark?s=sharp-duotone-solid toilet-paper-xmark}
 * @preview ![toilet-paper-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper-xmark.svg)
 */
const ToiletPaperXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 298 43 384 96 384l32 0 32 0 256 0c-52.4 0-94.9-83.9-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0L96 0C43 0 0 86 0 192zm86.1-48L120 110.1l17 17 31 31 31-31 17-17L249.9 144l-17 17-31 31 31 31 17 17L216 273.9l-17-17-31-31-31 31-17 17L86.1 240l17-17 31-31-31-31-17-17z" />
        <path d="M416 384c-52.4 0-94.9-83.8-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0s96 86 96 192l0 320-352 0 0-128 256 0zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default ToiletPaperXmark;