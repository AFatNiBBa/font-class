
import { Icon } from "../../index";

/**
 * A component that renders the `text-width` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=light text-width}
 * @preview ![text-width](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/text-width.svg)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 176 0 0 192-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-192 176 0 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-17.7-14.3-32-32-32L32 32zM4.7 372.7c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 400l338.7 0-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 368 54.6 368l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-80 80z" />
    </Icon>
);

export default TextWidth;