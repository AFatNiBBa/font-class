
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=sharp-solid bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 288L320 0 260.7 197.6 432 224 128 512l59.3-197.6L16 288z" />
    </Icon>
);

export default Bolt;