
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=light file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 64 32 0 0-92.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-80-32 0 0 80zm-.5-288L240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4zm123.8 52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L521.4 304 208 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l313.4 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default FileExport;