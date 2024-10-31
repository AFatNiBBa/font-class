
import { Icon } from "../../index";

/**
 * A component that renders the `mug-tea-saucer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea-saucer?s=sharp-solid mug-tea-saucer}
 * @preview ![mug-tea-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mug-tea-saucer.svg)
 */
const MugTeaSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 96l0-64L96 32l0 352 384 0 0-96 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0L240 32l0 64 48 48 0 112-128 0 0-112 48-48zm272 0l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128zM32 416L0 416l0 64 32 0 512 0 32 0 0-64-32 0L32 416z" />
    </Icon>
);

export default MugTeaSaucer;