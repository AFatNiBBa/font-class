
import { Icon } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=sharp-regular signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 80c-26.5 0-48 21.5-48 48l0 40 0 24-48 0 0-24 0-40c0-53 43-96 96-96s96 43 96 96l0 7.9c0 22.2-1.4 44.4-4.1 66.4l133-41.2 45.8-14.2-16.1 45.2L354.1 272l29.9 0 0 16 0 32-64 0-34.1 0 11.5-32.1 23.9-66.8L210.5 255.4l-1 4.7c-12.5 56.2-34 110.1-63.6 159.5l-29.3 48.8-7 11.7L96 480l-72 0L0 480l0-24L0 288l0-17.7 16.9-5.2L169 218c4.6-27.1 7-54.6 7-82.1l0-7.9c0-26.5-21.5-48-48-48zM384 368l0 48-199.2 0c8.5-15.6 16.3-31.7 23.3-48L384 368zM157.1 271.9L48 305.7 48 432l34.4 0 22.3-37.1c23.1-38.4 40.7-79.8 52.4-123zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default SignatureLock;