
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=regular folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 336l-352 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L512 144c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16zM160 384l352 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64L394.5 96c-17 0-33.3-6.7-45.3-18.7L322.7 50.7c-12-12-28.3-18.7-45.3-18.7L160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z" />
    </Icon>
);

export default Folders;