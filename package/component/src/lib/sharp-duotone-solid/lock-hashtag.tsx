
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=sharp-duotone-solid lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320-80 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144l0 48L0 192zm112 96l16 0 32 0 0-32 0-16 32 0 0 16 0 32 64 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 64 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-64 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-64-32 0-16 0 0-32zm32-144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48-160 0 0-48zm48 176l0 64 64 0 0-64-64 0z" />
        <path d="M192 256l0-16-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 64-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 64 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-64 32 0 16 0 0-32-16 0-32 0 0-32 0-16-32 0 0 16 0 32-64 0 0-32zm64 128l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default LockHashtag;