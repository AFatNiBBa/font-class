
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=thin unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c-61.9 0-112 50.1-112 112l0 64 272 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l32 0 0-64C96 57.3 153.3 0 224 0c58.9 0 108.5 39.8 123.4 93.9c1.2 4.3-1.3 8.7-5.6 9.8s-8.7-1.3-9.8-5.6C318.9 50.8 275.5 16 224 16zM64 208c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-272 0-16 0-32 0zM272 352c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16zm-16-32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0z" />
    </Icon>
);

export default UnlockKeyhole;