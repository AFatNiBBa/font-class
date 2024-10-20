
import { Icon } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=sharp-thin list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM80 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM176 88l-8 0 0 16 8 0 320 0 8 0 0-16-8 0L176 88zm0 160l-8 0 0 16 8 0 320 0 8 0 0-16-8 0-320 0zm0 160l-8 0 0 16 8 0 320 0 8 0 0-16-8 0-320 0z" />
    </Icon>
);

export default ListUl;