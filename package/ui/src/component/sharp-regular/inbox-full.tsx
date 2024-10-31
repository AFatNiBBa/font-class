
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=sharp-regular inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 432l0-96 81.2 0 25.4 50.7 6.6 13.3 14.8 0 160 0 14.8 0 6.6-13.3L382.8 336l81.2 0 0 96L48 432zM402.5 80l52 208L368 288l-14.8 0-6.6 13.3L321.2 352l-130.3 0-25.4-50.7L158.8 288 144 288l-86.5 0 52-208 293 0zM0 320L0 432l0 48 48 0 416 0 48 0 0-48 0-112L440 32 72 32 0 320zM184 128l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm-32 80l-24 0 0 48 24 0 208 0 24 0 0-48-24 0-208 0z" />
    </Icon>
);

export default InboxFull;