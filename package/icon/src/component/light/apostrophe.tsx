
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=light apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M78.7 320.1c-8.8 .7-15.3 8.5-14.6 17.3s8.5 15.4 17.3 14.6l8-.7c58-4.8 102.7-53.4 102.7-111.6l0-79.7 0-32 0-32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l64 0c11.7 0 22.6-3.1 32-8.6l0 24.2c0 41.6-31.9 76.3-73.4 79.7l-8 .7zM160 160c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 0 32z" />
    </Icon>
);

export default Apostrophe;