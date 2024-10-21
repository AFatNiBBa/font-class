
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=thin text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 56c0-4.4 3.6-8 8-8l160 0 0 416-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-416 160 0c4.4 0 8 3.6 8 8l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48c0-13.3-10.7-24-24-24L192 32 24 32C10.7 32 0 42.7 0 56l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48zM336 248c0-4.4 3.6-8 8-8l128 0 0 224-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-224 128 0c4.4 0 8 3.6 8 8l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48c0-13.3-10.7-24-24-24l-136 0-136 0c-13.3 0-24 10.7-24 24l0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48z" />
    </Icon>
);

export default TextSize;