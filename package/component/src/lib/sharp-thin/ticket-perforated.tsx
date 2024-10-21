
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=sharp-thin ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64L0 80 0 432l0 16 16 0 608 0 16 0 0-16 0-112 0-16-16 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l16 0 0-16 0-112 0-16-16 0L16 64 0 64zM624 432L16 432 16 80l608 0 0 112c-35.3 0-64 28.7-64 64s28.7 64 64 64l0 112zM480 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default TicketPerforated;