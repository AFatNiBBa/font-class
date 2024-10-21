
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=solid files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 0L160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224-96 0c-17.7 0-32-14.3-32-32l0-96zM448 96L416 64 384 32 352 0l0 45.3L352 64l0 32 32 0 18.7 0L448 96zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l192 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-192 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default Files;