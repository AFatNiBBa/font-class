
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=duotone file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0C28.7 0 0 28.7 0 64z" />
        <path d="M224 0L384 160H256c-17.7 0-32-14.3-32-32V0z" />
    </Icon>
);

export default File;