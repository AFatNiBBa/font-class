
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=sharp-regular bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M234.7 96l10.7-48L256 0 206.8 0 32 0 5.3 240 0 288l48.3 0 78.6 0 49.1 0-10.3 48-16.3 76L128 512l65.8-78.2L384 208l0-16 0-48-48 0-62.8 0L224 144l10.7-48zm100.1 96L215.3 333.9l7.7-35.8L235.4 240 176 240 53.6 240 75 48l121.2 0-19 85.6-13 58.4 59.8 0 110.7 0z" />
    </Icon>
);

export default BoltLightning;