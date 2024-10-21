
import { Icon } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-solid file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-85-1.7 1.7L262.2 445.9l-11.7 1.9-11.6 1.9-5.3-10.5L222.1 416l-12.2 0-11.6 23.2-4.4 8.8-9.9 0-8 0-11.9 0-3.4-11.4L144 381l-16.7 55.6L123.9 448 112 448l-32 0-16 0 0-32 16 0 20.1 0 20.6-68.6 3.4-11.4 11.9 0 16 0 11.9 0 3.4 11.4 15.4 51.4 3-5.9 4.4-8.8 9.9 0 32 0 9.9 0 4.4 8.8 7.2 14.5L267 313.4l117-117 0-36.4-160 0L224 0zm32 0l0 128 128 0L256 0zM505 119.8l-41.3 41.3 71 71L576 190.8l-71-71zm-63.9 63.9L299.9 325 288 407.9 370.9 396 512.1 254.7l-71-71z" />
    </Icon>
);

export default FileSignature;