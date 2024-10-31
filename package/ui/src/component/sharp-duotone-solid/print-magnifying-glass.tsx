
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-magnifying-glass?s=sharp-duotone-solid print-magnifying-glass}
 * @preview ![print-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/print-magnifying-glass.svg)
 */
const PrintMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l288 0c-38.9 29.2-64 75.7-64 128c0 11 1.1 21.7 3.2 32L192 352l0 16 0 16 0 64 160 0c26.7 20.1 60 32 96 32c17.5 0 34.4-2.8 50.2-8L512 485.8l0 26.2-32 0-320 0-32 0 0-32 0-96-64 0 0-192zM128 0l32 0L432 0l13.3 0 9.4 9.4 48 48 9.4 9.4L512 80l0 80-64 0 0-66.7L418.7 64 192 64l0 96-64 0 0-128 0-32z" />
        <path d="M528 320.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM520 426c-20.5 14-45.3 22.1-72 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 426z" />
    </Icon>
);

export default PrintMagnifyingGlass;