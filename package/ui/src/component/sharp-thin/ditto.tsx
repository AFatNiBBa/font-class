
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-thin ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M52.8 272L16 110.2 16 48l96 0 0 62.2L75.2 272l-22.5 0zM128 32l-16 0L16 32 0 32 0 48l0 64L40 288l48 0 40-176 0-64 0-16zM244.8 272L208 110.2 208 48l96 0 0 62.2L267.2 272l-22.5 0zM320 32l-16 0-96 0-16 0 0 16 0 64 40 176 48 0 40-176 0-64 0-16z" />
    </Icon>
);

export default Ditto;