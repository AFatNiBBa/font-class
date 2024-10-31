
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=thin dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L96.5 0c17.5 0 32.9 11.3 38.2 28L247 384.6c3-.4 6-.6 9-.6c23.2 0 43.5 12.3 54.7 30.8l254.9-78.4c4.2-1.3 8.7 1.1 10 5.3s-1.1 8.7-5.3 10L317.3 429.5c1.8 5.9 2.7 12.1 2.7 18.5c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.7 16.3-49.5 39.5-59.1L119.4 32.8C116.3 22.8 107 16 96.5 16L8 16c-4.4 0-8-3.6-8-8zM304 448a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;