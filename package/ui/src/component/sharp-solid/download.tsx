
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-solid download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 242.7-73.4-73.4L128 178.7 82.7 224l22.6 22.6 128 128L256 397.3l22.6-22.6 128-128L429.3 224 384 178.7l-22.6 22.6L288 274.7 288 32zM0 512l512 0 0-160-165.5 0-45.3 45.3L256 442.5l-45.3-45.3L165.5 352 0 352 0 512zM432 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Download;