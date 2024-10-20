
import { Icon } from "../../index";

/**
 * A component that renders the `farm` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=sharp-solid farm}
 * @preview ![farm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/farm.svg)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0s96 43 96 96L0 96zm0 32l181.4 0-51 123.8-2.4 5.9 0 6.3 0 248L0 512 0 128zM160 512l0-248 56-136L368 64l152 64 56 136 0 248-144 0 0-112-128 0 0 112-144 0zM416 224l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default Farm;