
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=sharp-thin 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 320a144 144 0 1 1 288 0A144 144 0 1 1 16 320zm84.6-148.6L234.8 32l-22.2 0L46.6 204.4C16.7 235.4 0 276.9 0 320c0 88.4 71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160c-21 0-41.1 4-59.4 11.4z" />
    </Icon>
);

export default $6;