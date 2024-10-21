
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-solid files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z" />
    </Icon>
);

export default Files;