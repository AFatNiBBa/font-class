
import { Icon, generic } from "../../index";

/**
 * A component that renders the `files-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files-medical?s=duotone files-medical}
 * @preview ![files-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/files-medical.svg)
 */
const FilesMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-256-64 0c-17.7 0-32-14.3-32-32l0-64L160 0C124.7 0 96 28.7 96 64zm80 176c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M352 64l0-64 96 96-64 0c-17.7 0-32-14.3-32-32zM24 96c13.3 0 24 10.7 24 24l0 256c0 48.6 39.4 88 88 88l192 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-192 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24zm216 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default FilesMedical;