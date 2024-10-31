
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-duotone-solid folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM127 289c11.3-11.3 22.6-22.6 33.9-33.9c21 21 42 42 63 63c42.3-42.3 84.7-84.7 127-127c11.3 11.3 22.6 22.6 33.9 33.9c-48 48-96 96-144 144c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-26.7-26.7-53.3-53.3-80-80z" />
        <path d="M385 225L241 369l-17 17-17-17-80-80L161 255l63 63L351 191 385 225z" />
    </Icon>
);

export default FolderCheck;