
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=duotone box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 128l0 288c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-288L32 128zm128 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32z" />
        <path d="M0 64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64z" />
    </Icon>
);

export default BoxArchive;