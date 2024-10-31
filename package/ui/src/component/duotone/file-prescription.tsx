
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=duotone file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM84 216l0 80 0 64c0 11 9 20 20 20s20-9 20-20l0-44 20 0c.7 .9 1.5 1.8 2.3 2.6l64.8 60.8-32.6 29.9c-8.1 7.5-8.7 20.1-1.2 28.3c3.9 4.3 9.3 6.5 14.7 6.5c4.8 0 9.7-1.7 13.5-5.3l34.9-32 33.9 31.8c8.1 7.6 20.7 7.1 28.3-.9s7.1-20.7-.9-28.3L270 379.7l31.6-28.9c8.1-7.5 8.7-20.1 1.2-28.3s-20.1-8.7-28.3-1.2l-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9c0-33.1-26.9-60-60-60l-72 0c-11 0-20 9-20 20zm40 20l52 0c11 0 20 9 20 20s-9 20-20 20l-52 0 0-40z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM104 196c-11 0-20 9-20 20l0 80 0 64c0 11 9 20 20 20s20-9 20-20l0-44 20 0c.7 .9 1.5 1.8 2.3 2.6l64.8 60.8-32.6 29.9c-8.1 7.5-8.7 20.1-1.2 28.3s20.1 8.7 28.3 1.2l34.9-32 33.9 31.8c8.1 7.6 20.7 7.1 28.3-.9s7.1-20.7-.9-28.3L270 379.7l31.6-28.9c8.1-7.5 8.7-20.1 1.2-28.3s-20.1-8.7-28.3-1.2l-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9c0-33.1-26.9-60-60-60l-72 0zm72 80l-52 0 0-40 52 0c11 0 20 9 20 20s-9 20-20 20z" />
    </Icon>
);

export default FilePrescription;