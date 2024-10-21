
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=duotone plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32c0 2.3-.3 4.6-.7 6.8C309.8 220 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3c-11.1 5.1-22.9 9-35.1 11.5l0 67.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.2C87 398 32 333.4 32 256l0-32c-17.7 0-32-14.3-32-32zM64 32C64 14.3 78.3 0 96 0s32 14.3 32 32l0 96-64 0 0-96zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96-64 0 0-96z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default PlugCircleXmark;