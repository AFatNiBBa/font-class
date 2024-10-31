
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=light plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96 32 0 0-96zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96 32 0 0-96zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 64c0 83 63.1 151.2 144 159.2l0 96.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96.8c17.3-1.7 33.7-6.2 48.9-12.9c-.6-6-.9-12.1-.9-18.3c0-6 .3-11.8 .9-17.6c-19 11.2-41.2 17.6-64.9 17.6c-70.7 0-128-57.3-128-128l0-64 256 0 0 56.2c9.8-8.1 20.6-15.2 32-21l0-35.2 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32 0L64 144l-32 0-16 0zM320 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-84.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" />
    </Icon>
);

export default PlugCircleXmark;