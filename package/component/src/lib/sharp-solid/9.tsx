
import { Icon } from "../../index";

/**
 * A component that renders the `9` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/9?s=sharp-solid 9}
 * @preview ![9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/9.svg)
 */
const $9: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 96a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM67 480l96.5-128c-1.2 0-2.3 0-3.5 0C71.6 352 0 280.4 0 192S71.6 32 160 32s160 71.6 160 160c0 38.1-12.4 75.2-35.3 105.6L147.2 480 67 480z" />
    </Icon>
);

export default $9;