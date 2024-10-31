
import { Icon } from "../../index";

/**
 * A component that renders the `text-width` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=thin text-width}
 * @preview ![text-width](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/text-width.svg)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 56c0-4.4 3.6-8 8-8l192 0 0 224-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-224 192 0c4.4 0 8 3.6 8 8l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48c0-13.3-10.7-24-24-24L224 32 24 32C10.7 32 0 42.7 0 56l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48zM445.7 389.7c3.1-3.1 3.1-8.2 0-11.3l-80-80c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L420.7 376 27.3 376l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 392l393.4 0-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l80-80z" />
    </Icon>
);

export default TextWidth;