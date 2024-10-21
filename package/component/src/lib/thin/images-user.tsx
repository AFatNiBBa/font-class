
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=thin images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48L160 48c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l64 0 0-32c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80l0 32 64 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48zM448 384l-16 0-192 0-16 0-64 0c-35.3 0-64-28.7-64-64L96 96c0-35.3 28.7-64 64-64l352 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-64 0zm-16-16l0-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64l0 32 192 0zM64 128l0 16c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l16 0c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm320 32a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM336 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImagesUser;