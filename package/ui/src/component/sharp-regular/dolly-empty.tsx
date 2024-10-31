
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=sharp-regular dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L24 0 128 0c10.4 0 19.6 6.7 22.8 16.6L250 320.2c2-.1 4-.2 6-.2c33.2 0 62.5 16.9 79.8 42.5L544 289.4l22.6-8 15.9 45.3-22.6 8L351.7 407.8c.2 2.7 .3 5.4 .3 8.2c0 53-43 96-96 96s-96-43-96-96c0-34 17.7-63.9 44.3-80.9L110.6 48 24 48 0 48 0 0zM304 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;