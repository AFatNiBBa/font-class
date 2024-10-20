
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=sharp-thin lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128l0 64 224 0 0-64c0-61.9-50.1-112-112-112s-112 50.1-112 112zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 80 0 16 0 0 16 0 288 0 16-16 0L16 512 0 512l0-16L0 208l0-16 16 0 80 0zm0 16l-80 0 0 288 416 0 0-288-80 0-16 0-224 0-16 0zm88 40l0 8 0 40 80 0 0-40 0-8 16 0 0 8 0 40 40 0 8 0 0 16-8 0-40 0 0 80 40 0 8 0 0 16-8 0-40 0 0 40 0 8-16 0 0-8 0-40-80 0 0 40 0 8-16 0 0-8 0-40-40 0-8 0 0-16 8 0 40 0 0-80-40 0-8 0 0-16 8 0 40 0 0-40 0-8 16 0zm0 144l80 0 0-80-80 0 0 80z" />
    </Icon>
);

export default LockHashtag;