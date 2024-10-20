
import { Icon, generic } from "../../index";

/**
 * A component that renders the `network-wired` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/network-wired?s=duotone network-wired}
 * @preview ![network-wired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/network-wired.svg)
 */
const NetworkWired: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l96 0 0 32 64 0 0-32 256 0 0 32 64 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32-64 0 0 32L32 224c-17.7 0-32 14.3-32 32z" />
        <path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 384l128 0 0 64L96 448l0-64zM80 320c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L80 320zM416 448l0-64 128 0 0 64-128 0zm-64-80l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default NetworkWired;