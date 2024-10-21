
import { Icon } from "../../index";

/**
 * A component that renders the `square-6` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=solid square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM224 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70C142.2 224.8 128 255.6 128 288z" />
    </Icon>
);

export default Square_6;