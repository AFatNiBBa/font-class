
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=regular text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 128l0-48 120 0 0 352-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-352 120 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 56c0 13.3 10.7 24 24 24s24-10.7 24-24zM360 296l0-24 96 0 0 160-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-160 88 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32c0-22.1-17.9-40-40-40l-248 0c-22.1 0-40 17.9-40 40l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default TextSize;