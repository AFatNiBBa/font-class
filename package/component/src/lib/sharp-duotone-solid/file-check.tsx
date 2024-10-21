
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-duotone-solid file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM62.1 328c5.7 5.7 11.3 11.3 17 17c21.3 21.3 42.7 42.7 64 64c5.7 5.7 11.3 11.3 17 17c5.7-5.7 11.3-11.3 17-17c42.7-42.7 85.3-85.3 128-128c5.7-5.7 11.3-11.3 17-17L288 230.1c-5.7 5.7-11.3 11.3-17 17c-37 37-74 74-111 111l-47-47-17-17C84.7 305.4 73.4 316.7 62.1 328z" />
        <path d="M384 160L224 0l0 160 160 0zM305 281l17-17L288 230.1l-17 17-111 111-47-47-17-17L62.1 328l17 17 64 64 17 17 17-17L305 281z" />
    </Icon>
);

export default FileCheck;