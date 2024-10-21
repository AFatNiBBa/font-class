
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=thin 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 320a144 144 0 1 1 288 0A144 144 0 1 1 16 320zm84.6-148.6L221.8 45.5c3.1-3.2 3-8.2-.2-11.3s-8.2-3-11.3 .2L46.6 204.4C16.7 235.4 0 276.9 0 320c0 88.4 71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160c-21 0-41.1 4-59.4 11.4z" />
    </Icon>
);

export default $6;