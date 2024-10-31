
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-regular share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.3 427c35.8 37.4 77.7 53 77.7 53s-30.1-30.1-31.9-75.7c-.1-1.4-.1-2.8-.1-4.3c0-61.9 50.1-112 112-112l32 0 48 0 0 48 0 12.2 0 .9 0 34.9 32 0 16-14.7L476.5 240.6 512 208l-35.5-32.6L336 46.7 320 32l-32 0 0 34.9 0 .9L288 80l0 48-48 0-64 0C78.8 128 0 206.8 0 304c0 54.8 23.5 95 50.3 123zm5.8-77.6C51.1 336 48 321 48 304c0-70.7 57.3-128 128-128l112 0 48 0 0-48 0-16.2L441 208 336 304.2l0-16.2 0-48-48 0-80 0c-70.7 0-130.6 45.8-151.8 109.4z" />
    </Icon>
);

export default Share;