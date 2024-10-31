
import { Icon } from "../../index";

/**
 * A component that renders the `9` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/9?s=light 9}
 * @preview ![9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/9.svg)
 */
const $9: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 192c0 70.7 57.3 128 128 128c69.7 0 126.3-55.7 128-124.9c0-1 0-2 0-3.1c0-70.7-57.3-128-128-128S32 121.3 32 192zM193.2 348.5c-10.7 2.3-21.8 3.5-33.2 3.5C71.6 352 0 280.4 0 192S71.6 32 160 32s160 71.6 160 160c0 2 0 3.9-.1 5.9c-1.4 37.9-15.9 74.2-41.1 102.6L124 474.6c-5.9 6.6-16 7.2-22.6 1.3s-7.2-16-1.3-22.6l93.2-104.8z" />
    </Icon>
);

export default $9;