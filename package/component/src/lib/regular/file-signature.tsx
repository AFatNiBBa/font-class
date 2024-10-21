
import { Icon } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=regular file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 464l256 0c8.8 0 16-7.2 16-16l0-6.7 39.8-9.9c2.8-.7 5.6-1.6 8.2-2.7l0 19.3c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3l0 49.1-48 48 0-91.6-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zm96-115l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L96 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 25.6 0 12-48.2c1.4-5.6 4.3-10.8 8.4-14.9L441.1 191.8l71 71L382.9 391.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-1.1 .3-2.1 .4-3.2 .5c-.8 .1-1.5 .2-2.3 .2L256 416c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L160 349zM549.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0z" />
    </Icon>
);

export default FileSignature;