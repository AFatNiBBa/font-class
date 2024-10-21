
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-six` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-six?s=sharp-duotone-solid dice-six}
 * @preview ![dice-six](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-six.svg)
 */
const DiceSix: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM288 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M128 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM320 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default DiceSix;