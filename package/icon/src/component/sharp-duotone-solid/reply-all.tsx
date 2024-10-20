
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-duotone-solid reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 208L192 32l32 0 0 88-96 88 96 88 0 88-32 0L0 208z" />
        <path d="M128 208L320 384l32 0 0-96 16 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176l-48 0 0-96-32 0L128 208z" />
    </Icon>
);

export default ReplyAll;