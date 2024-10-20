
import { Icon } from "../../index";

/**
 * A component that renders the `copyright` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=sharp-solid copyright}
 * @preview ![copyright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/copyright.svg)
 */
const Copyright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256c0 44.2 35.8 80 80 80c28.7 0 53.8-15.1 68-37.8l40.8 25.4C342.2 359.8 301.9 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c45.9 0 86.2 24.2 108.7 60.5L324 213.8c-14.2-22.8-39.3-37.8-68-37.8c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default Copyright;