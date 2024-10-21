
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-light copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 352l-224 0 0-320 146.7 0L416 109.3 416 352zM448 96L352 0 192 0 160 0l0 32 0 320 0 32 32 0 224 0 32 0 0-32 0-256zM32 128L0 128l0 32L0 480l0 32 32 0 224 0 32 0 0-32 0-64-32 0 0 64L32 480l0-320 96 0 0-32-96 0z" />
    </Icon>
);

export default Copy;