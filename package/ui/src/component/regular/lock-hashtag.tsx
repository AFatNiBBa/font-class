
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=regular lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 32 160 0 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 160l0-32C96 57.3 153.3 0 224 0s128 57.3 128 128l0 32 32 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l32 0zm0 48l-32 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-32 0-48 0-160 0-48 0zm88 16c13.3 0 24 10.7 24 24l0 24 32 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-32 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-24c0-13.3 10.7-24 24-24zm24 128l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default LockHashtag;