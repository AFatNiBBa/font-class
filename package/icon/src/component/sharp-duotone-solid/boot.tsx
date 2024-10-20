
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=sharp-duotone-solid boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l320 0 0 64-48 0-16 0 0 32 16 0 48 0 0 32-48 0-16 0 0 32 16 0 48 0 192 48 0 144L0 448 0 96z" />
        <path d="M352 0L0 0 0 96l352 0 0-96zM0 448l0 32 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 0-32L0 448z" />
    </Icon>
);

export default Boot;