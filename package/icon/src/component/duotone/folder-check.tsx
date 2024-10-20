
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=duotone folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM136 288c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47L335 207c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L241 369c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7l-64-64c-4.7-4.7-7-10.8-7-17z" />
        <path d="M369 207c9.4 9.4 9.4 24.6 0 33.9L241 369c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 207c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default FolderCheck;