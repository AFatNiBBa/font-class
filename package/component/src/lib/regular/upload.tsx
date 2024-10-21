
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=regular upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-278.1-95 95c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 7c9.4-9.4 24.6-9.4 33.9 0L409 143c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-95-95L280 360zm32-8l0-48 136 0c35.3 0 64 28.7 64 64l0 80c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-80c0-35.3 28.7-64 64-64l136 0 0 48L64 352c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-80c0-8.8-7.2-16-16-16l-136 0zm72 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Upload;