
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=sharp-duotone-solid file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM84 196l0 20 0 80 0 64 0 20 40 0 0-20 0-44 19.6 0 2.8 2.6 64.8 60.8-32.6 29.9-14.7 13.5 27 29.5 14.7-13.5 34.9-32 33.9 31.8 14.6 13.7 27.4-29.2-14.6-13.7L270 379.7l31.6-28.9 14.7-13.5-27-29.5-14.7 13.5-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9c0-33.1-26.9-60-60-60l-72 0-20 0zm40 40l52 0c11 0 20 9 20 20s-9 20-20 20l-16.6 0-.3-.3-.3 .3L124 276l0-40z" />
        <path d="M384 160L224 0l0 160 160 0zM104 196l-20 0 0 20 0 80 0 64 0 20 40 0 0-20 0-44 19.6 0 2.8 2.6 64.8 60.8-32.6 29.9-14.7 13.5 27 29.5 14.7-13.5 34.9-32 33.9 31.8 14.6 13.7 27.4-29.2-14.6-13.7L270 379.7l31.6-28.9 14.7-13.5-27-29.5-14.7 13.5-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9c0-33.1-26.9-60-60-60l-72 0zm55.1 79.7l-.3 .3L124 276l0-40 52 0c11 0 20 9 20 20s-9 20-20 20l-16.6 0-.3-.3z" />
    </Icon>
);

export default FilePrescription;