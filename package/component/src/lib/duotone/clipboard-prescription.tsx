
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-prescription` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-prescription?s=duotone clipboard-prescription}
 * @preview ![clipboard-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clipboard-prescription.svg)
 */
const ClipboardPrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-49.6 0c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7c.1-.8 .3-1.6 .4-2.3L64 64C28.7 64 0 92.7 0 128zm84 88c0-11 9-20 20-20l72 0c33.1 0 60 26.9 60 60c0 25.5-15.9 47.2-38.3 55.9l43 40.3 33.8-31c8.1-7.5 20.8-6.9 28.3 1.2s6.9 20.8-1.2 28.3L270 379.7l31.7 29.7c8.1 7.6 8.5 20.2 .9 28.3s-20.2 8.5-28.3 .9l-33.9-31.8-34.9 32c-3.8 3.5-8.7 5.3-13.5 5.3c-5.4 0-10.8-2.2-14.7-6.5c-7.5-8.1-6.9-20.8 1.2-28.3l32.6-29.9-64.8-60.8c-.9-.8-1.6-1.7-2.3-2.6l-20 0 0 44c0 11-9 20-20 20s-20-9-20-20l0-64 0-80zm40 20l0 40 52 0c11 0 20-9 20-20s-9-20-20-20l-52 0z" />
        <path d="M113.2 66.3C93.9 72.6 80 90.7 80 112l0 24c0 13.3 10.7 24 24 24l88 0 88 0c13.3 0 24-10.7 24-24l0-24c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0s-72.4 28.7-78.8 66.3zM168 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM104 196c-11 0-20 9-20 20l0 80 0 64c0 11 9 20 20 20s20-9 20-20l0-44 20 0c.7 .9 1.5 1.8 2.3 2.6l64.8 60.8-32.6 29.9c-8.1 7.5-8.7 20.1-1.2 28.3s20.1 8.7 28.3 1.2l34.9-32 33.9 31.8c8.1 7.6 20.7 7.1 28.3-.9s7.1-20.7-.9-28.3L270 379.7l31.6-28.9c8.1-7.5 8.7-20.1 1.2-28.3s-20.1-8.7-28.3-1.2l-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9c0-33.1-26.9-60-60-60l-72 0zm72 80l-52 0 0-40 52 0c11 0 20 9 20 20s-9 20-20 20z" />
    </Icon>
);

export default ClipboardPrescription;