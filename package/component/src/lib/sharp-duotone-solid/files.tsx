
import { Icon, generic } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-duotone-solid files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0L352 0l0 96 96 0 0 320L96 416 96 0z" />
        <path d="M352 0l0 96 96 0L352 0zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 304 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Files;