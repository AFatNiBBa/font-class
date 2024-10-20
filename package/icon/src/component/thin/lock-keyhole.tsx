
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=thin lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c61.9 0 112 50.1 112 112l0 64-224 0 0-64c0-61.9 50.1-112 112-112zM96 128l0 64-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM64 208l32 0 16 0 224 0 16 0 32 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48zM240 320l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-48 0l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
    </Icon>
);

export default LockKeyhole;