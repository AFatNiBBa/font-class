
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=sharp-solid lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 80 0 0 320L0 512 0 192l80 0zm112 48l-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 64-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 64 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-64 32 0 16 0 0-32-16 0-32 0 0-32 0-16-32 0 0 16 0 32-64 0 0-32 0-16zm0 144l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default LockHashtag;