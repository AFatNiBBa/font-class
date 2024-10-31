
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-duotone-solid envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l417.6 0c-.5 2.6-.9 5.2-1.2 7.9c-.1 1.3-.2 2.7-.3 4s-.1 2.7-.1 4.1c0 41.9 32.2 76.2 73.1 79.7L256 320 0 144 0 64zM0 182.8L237.9 346.4 256 358.8l18.1-12.5L512 182.8 512 448 0 448 0 182.8z" />
        <path d="M416 80a80 80 0 1 1 160 0A80 80 0 1 1 416 80z" />
    </Icon>
);

export default EnvelopeDot;