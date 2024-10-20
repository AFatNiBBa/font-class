
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=solid mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default MugSaucer;