
import { Icon } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-light list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l32 0 0 32-32 0 0-32zM16 48l0 32 0 32 0 32 32 0 32 0 32 0 0-32 0-32 0-32L80 48 48 48 16 48zM176 80l-16 0 0 32 16 0 320 0 16 0 0-32-16 0L176 80zm0 160l-16 0 0 32 16 0 320 0 16 0 0-32-16 0-320 0zm0 160l-16 0 0 32 16 0 320 0 16 0 0-32-16 0-320 0zM80 240l0 32-32 0 0-32 32 0zM48 208l-32 0 0 32 0 32 0 32 32 0 32 0 32 0 0-32 0-32 0-32-32 0-32 0zm0 192l32 0 0 32-32 0 0-32zM16 368l0 32 0 32 0 32 32 0 32 0 32 0 0-32 0-32 0-32-32 0-32 0-32 0z" />
    </Icon>
);

export default List;