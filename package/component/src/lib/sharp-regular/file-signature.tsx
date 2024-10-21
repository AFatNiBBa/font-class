
import { Icon } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-regular file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 435.3l0 28.7L48 464 48 48l176 0 0 112 112 0 0 84.4 48-48 0-68.4L256 0 48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-37-1.7 1.7L336 435.3zM152 304l-11.9 0-3.4 11.4L116.1 384 96 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L160 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L225.9 384l12.2 0 11.6 23.2 4.4 8.8 9.9 0 16 0 1.6 0 6.4 0 .1-.1L370.9 404 512.1 262.7l-71-71L299.9 333l-7.3 51-11 0-1.6 0-6.1 0-11.6-23.2-4.4-8.8-9.9 0-32 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L179.9 304 168 304l-16 0zM576 198.8l-71-71-41.3 41.3 71 71L576 198.8z" />
    </Icon>
);

export default FileSignature;