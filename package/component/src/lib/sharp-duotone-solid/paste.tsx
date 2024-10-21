
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-duotone-solid paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l192 0 96 96 0 288-288 0 0-384z" />
        <path d="M160 0c-23.7 0-44.4 12.9-55.4 32L0 32 0 448l192 0 0-320 0-32 32 0 96 0 0-64L215.4 32C204.4 12.9 183.7 0 160 0zm0 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Paste;