
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=solid inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 178.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 224 32c0-17.7 14.3-32 32-32s32 14.3 32 32zM48 320l76.2 0c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7l120.4 0c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7l76.2 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default InboxIn;