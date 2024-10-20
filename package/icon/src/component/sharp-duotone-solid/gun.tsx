
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-duotone-solid gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 32 416 0 0-32L64 128zM224 352l120 0 16.9 0 5.7-15.9L400.9 240l-51 0-22.9 64L236 304l-12 48z" />
        <path d="M528 56l0-24-48 0 0 24 0 8L0 64 0 240l92 0L32 480l160 0 60-240 196 0 32-32 96 0 0-144-48 0 0-8zm-48 72l0 32L64 160l0-32 416 0z" />
    </Icon>
);

export default Gun;