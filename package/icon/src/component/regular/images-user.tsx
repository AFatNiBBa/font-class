
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=regular images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80L160 80c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l64 0c0-35.3 28.7-64 64-64l96 0c35.3 0 64 28.7 64 64l64 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zM160 32l352 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-352 0c-35.3 0-64-28.7-64-64L96 96c0-35.3 28.7-64 64-64zM24 96c13.3 0 24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l320 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-320 0C60.9 480 0 419.1 0 344L0 120c0-13.3 10.7-24 24-24zm248 80a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagesUser;