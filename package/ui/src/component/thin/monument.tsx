
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=thin monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M197.7 25c-3.1-3.1-8.2-3.1-11.3 0l-61 61c-3.7 3.7-6.1 8.6-6.8 13.8L79.9 393c-.6 4.4-4.6 7.5-9 6.9s-7.5-4.6-6.9-9L102.7 97.7c1.1-8.7 5.1-16.8 11.4-23.1l61-61c9.4-9.4 24.6-9.4 33.9 0l61 61c6.2 6.2 10.2 14.3 11.4 23.1L319.9 391c.6 4.4-2.5 8.4-6.9 9s-8.4-2.5-9-6.9L265.5 99.8c-.7-5.2-3.1-10.1-6.8-13.8l-61-61zM232 272l-80 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8zm-80-16l80 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24zM32 432l320 0c17.7 0 32 14.3 32 32l0 16c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-16c0-17.7 14.3-32 32-32zM16 464l0 16c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16L32 448c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Monument;