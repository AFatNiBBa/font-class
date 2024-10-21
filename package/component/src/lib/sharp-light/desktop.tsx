
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=sharp-light desktop}
 * @preview ![desktop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/desktop.svg)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 32L32 32l0 224 512 0 0-224zm32 224l0 32 0 96 0 32-32 0-181.1 0 10.7 64 58.4 0 16 0 0 32-16 0-72 0-144 0-72 0-16 0 0-32 16 0 58.4 0 10.7-64L32 416 0 416l0-32 0-96 0-32L0 32 0 0 32 0 544 0l32 0 0 32 0 224zM32 288l0 96 199.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L544 384l0-96L32 288zM234.9 480l106.2 0-10.7-64-84.9 0-10.7 64z" />
    </Icon>
);

export default Desktop;