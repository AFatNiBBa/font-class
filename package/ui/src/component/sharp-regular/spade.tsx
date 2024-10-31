
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=sharp-regular spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M39.8 408.2C90 458.3 169.6 461.1 223 416.5c3.1-2.6 6.1-5.3 9-8.2l0 55.7-48 0-24 0 0 48 24 0 48 0 48 0 48 0 24 0 0-48-24 0-48 0 0-55.7c2.9 2.9 5.9 5.6 9 8.2c53.4 44.6 133 41.8 183.2-8.4c53.1-53.1 53.1-139.2 0-192.3L256 0 39.8 215.8c-53.1 53.1-53.1 139.2 0 192.3zm33.9-33.9c-34.4-34.4-34.4-90.1 0-124.4c0 0 0 0 0 0L256 67.8 438.2 249.8s0 0 0 0c34.4 34.4 34.4 90.1 0 124.4c-34.3 34.3-90 34.4-124.3 .1l-23.7-24L256 315.6l-34.2 34.7-23.7 24c-34.4 34.3-90 34.2-124.3-.1z" />
    </Icon>
);

export default Spade;