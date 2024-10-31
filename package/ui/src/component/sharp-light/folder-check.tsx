
import { Icon } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-light folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zM235.3 363.3L224 374.6l-11.3-11.3-72-72 22.6-22.6L224 329.4 348.7 204.7l22.6 22.6-136 136z" />
    </Icon>
);

export default FolderCheck;