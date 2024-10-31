
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox-flag-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox-flag-up?s=sharp-thin mailbox-flag-up}
 * @preview ![mailbox-flag-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mailbox-flag-up.svg)
 */
const MailboxFlagUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 200l0-96 0-64 0-8 8 0 96 0 8 0 0 8 0 64 0 8-8 0-88 0 0 88 0 8-16 0 0-8zM448 96l0-48-80 0 0 48 80 0zM560 208c0-47.4-25.7-88.7-64-110.9L496 79c47.4 23.6 80 72.5 80 129l0 224 0 16-16 0-272 0-16 0L16 448 0 448l0-16L0 208C0 128.5 64.5 64 144 64l176 0 0 16L210 80c46.3 23.9 78 72.3 78 128l0 224 272 0 0-224zM272 432l0-224c0-70.7-57.3-128-128-128S16 137.3 16 208l0 224 256 0zM64 192l8 0 144 0 8 0 0 16-8 0L72 208l-8 0 0-16z" />
    </Icon>
);

export default MailboxFlagUp;