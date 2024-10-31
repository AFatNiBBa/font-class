
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-duotone-solid mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 512 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
        <path d="M448 32L96 32l0 352 384 0 0-96 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0zm32 64l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default MugSaucer;