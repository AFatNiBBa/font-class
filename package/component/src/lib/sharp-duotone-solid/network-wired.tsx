
import { Icon, generic } from "../../index";

/**
 * A component that renders the `network-wired` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/network-wired?s=sharp-duotone-solid network-wired}
 * @preview ![network-wired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/network-wired.svg)
 */
const NetworkWired: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 96 0 0 32 64 0 0-32 256 0 0 32 64 0 0-32 96 0 32 0 0-64-32 0-256 0 0-32-64 0 0 32L32 224 0 224z" />
        <path d="M384 64l0 64-128 0 0-64 128 0zM256 0L192 0l0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64L384 0 256 0zM224 384l0 64L96 448l0-64 128 0zM96 320l-64 0 0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64-64 0L96 320zm320 64l128 0 0 64-128 0 0-64zm-64-64l0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64-64 0-128 0-64 0z" />
    </Icon>
);

export default NetworkWired;