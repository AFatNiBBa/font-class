
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-doc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-doc?s=sharp-duotone-solid file-doc}
 * @preview ![file-doc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-doc.svg)
 */
const FileDoc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM176 352l-16 0 0 16 0 128 0 16 16 0 32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0zm16 128l0-96 16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0zM456 352c-22.1 0-40 17.9-40 40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-8 0-16-32 0 0 16 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 8 0 16 32 0 0-16 0-8c0-22.1-17.9-40-40-40l-16 0zM288 392l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-80c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm40-8l16 0c4.4 0 8 3.6 8 8l0 80c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default FileDoc;