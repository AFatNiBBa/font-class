
import { Icon } from "../../index";

/**
 * A component that renders the `windows` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windows?s=brands windows}
 * @preview ![windows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/windows.svg)
 */
const Windows: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
    </Icon>
);

export default Windows;