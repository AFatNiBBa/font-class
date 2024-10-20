
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-auto` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-auto?s=sharp-solid bolt-auto}
 * @preview ![bolt-auto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bolt-auto.svg)
 */
const BoltAuto: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 0L0 288l162.2 23.2L112 512 416 224 253.8 200.8 304 0zM506.4 512l69.6 0L480 288l-64 0L320 512l69.6 0 13.7-32 89.3 0 13.7 32zM448 375.8L465.2 416l-34.5 0L448 375.8z" />
    </Icon>
);

export default BoltAuto;