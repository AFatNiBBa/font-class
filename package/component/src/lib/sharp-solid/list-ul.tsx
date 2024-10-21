
import { Icon } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=sharp-solid list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64l-32 0 0 64 32 0 288 0 32 0 0-64-32 0L192 64zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default ListUl;