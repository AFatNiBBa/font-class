
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=sharp-regular lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 32 160 0 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 160l0-32C96 57.3 153.3 0 224 0s128 57.3 128 128l0 32 48 0 48 0 0 48 0 256 0 48-48 0L48 512 0 512l0-48L0 208l0-48 48 0 48 0zm0 48l-48 0 0 256 352 0 0-256-48 0-48 0-160 0-48 0zm112 16l0 24 0 24 32 0 0-24 0-24 48 0 0 24 0 24 24 0 24 0 0 48-24 0-24 0 0 32 24 0 24 0 0 48-24 0-24 0 0 24 0 24-48 0 0-24 0-24-32 0 0 24 0 24-48 0 0-24 0-24-24 0-24 0 0-48 24 0 24 0 0-32-24 0-24 0 0-48 24 0 24 0 0-24 0-24 48 0zm0 128l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default LockHashtag;