
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=sharp-thin inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 322l.5-2 106.6 0 29.8 59.6 2.2 4.4 4.9 0 192 0 4.9 0 2.2-4.4L388.9 320l106.6 0 .5 2 0 142L16 464l0-142zM84.5 48l343 0 64 256L384 304l-4.9 0-2.2 4.4L347.1 368l-182.1 0-29.8-59.6-2.2-4.4-4.9 0L20.5 304l64-256zM0 320L0 464l0 16 16 0 480 0 16 0 0-16 0-144L440 32 72 32 0 320zM152 112l-8 0 0 16 8 0 216 0 8 0 0-16-8 0-216 0zm-24 64l-8 0 0 16 8 0 256 0 8 0 0-16-8 0-256 0zm-16 64l-8 0 0 16 8 0 280 0 8 0 0-16-8 0-280 0z" />
    </Icon>
);

export default InboxFull;