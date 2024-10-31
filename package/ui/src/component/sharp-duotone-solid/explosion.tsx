
import { Icon, generic } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-duotone-solid explosion}
 * @preview ![explosion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/explosion.svg)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l144 48L96 192 240 304l24-176 48 0 24 168L544 0 432 368l144-48L466.3 448 384 448c0-53-43-96-96-96s-96 43-96 96l-82.3 0L0 320zM264 0l48 0 0 24 0 48 0 24-48 0 0-24 0-48 0-24z" />
        <path d="M0 448l32 0 512 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
    </Icon>
);

export default Explosion;