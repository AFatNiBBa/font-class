
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=sharp-duotone-solid ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 0L256 0l0 96-80 0-16 0 0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 96L0 512 0 0z" />
        <path d="M176 96l-16 0 0 32 16 0 80 0 0-32-80 0zm-16 96l0 32 16 0 80 0 0-32-80 0-16 0zm16 96l-16 0 0 32 16 0 80 0 0-32-80 0zm0 96l-16 0 0 32 16 0 80 0 0-32-80 0z" />
    </Icon>
);

export default RulerVertical;