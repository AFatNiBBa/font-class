
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=thin share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 144c8.8 0 16-7.2 16-16l0-64c0-6.3 3.7-12 9.5-14.6s12.5-1.5 17.2 2.7l160 144c3.4 3 5.3 7.4 5.3 11.9s-1.9 8.9-5.3 11.9l-160 144c-4.7 4.2-11.4 5.3-17.2 2.7s-9.5-8.3-9.5-14.6l0-64c0-8.8-7.2-16-16-16l-96 0c-61.9 0-112 50.1-112 112c0 35.5 15.2 57.1 27.3 68.4c3.7 3.5 4.7 6.5 4.7 7.8c0 2.1-1.7 3.7-3.7 3.7c-.3 0-.5 0-.6 0C90.6 454.7 16 408.2 16 304c0-88.4 71.6-160 160-160l112 0zm0 160l0 48c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4s-19 16.6-19 29.2l0 48 0 16-16 0-96 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l80 0 16 0 0 16z" />
    </Icon>
);

export default Share;