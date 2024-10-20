
import { Icon, generic } from "../../index";

/**
 * A component that renders the `farm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=sharp-duotone-solid farm}
 * @preview ![farm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/farm.svg)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 264l56-136L368 64l152 64 56 136 0 248-144 0 0-112-128 0 0 112-144 0 0-248zm160-40l0 96c32 0 64 0 96 0l0-96c-32 0-64 0-96 0z" />
        <path d="M0 96C0 43 43 0 96 0s96 43 96 96L0 96zM0 512L0 128l181.4 0-51 123.8c-1.6 3.9-2.4 8-2.4 12.2l0 248L0 512zM416 224l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default Farm;