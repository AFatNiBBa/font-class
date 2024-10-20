
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=duotone toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm480 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
        <path d="M288 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ToggleOn;