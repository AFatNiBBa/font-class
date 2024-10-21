
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-solid mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l352 0 32 0 32 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 96L96 384 96 32zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default MugSaucer;