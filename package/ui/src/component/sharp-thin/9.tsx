
import { Icon } from "../../index";

/**
 * A component that renders the `9` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/9?s=sharp-thin 9}
 * @preview ![9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/9.svg)
 */
const $9: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 192A144 144 0 1 1 16 192a144 144 0 1 1 288 0zM219.4 340.6L85.2 480l22.2 0 166-172.4C303.3 276.6 320 235.1 320 192c0-88.4-71.6-160-160-160S0 103.6 0 192s71.6 160 160 160c21 0 41.1-4 59.4-11.4z" />
    </Icon>
);

export default $9;