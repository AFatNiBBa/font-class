
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=duotone mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
        <path d="M128 32c-17.7 0-32 14.3-32 32l0 224c0 53 43 96 96 96l192 0c53 0 96-43 96-96l32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0L128 32zM480 96l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default MugSaucer;