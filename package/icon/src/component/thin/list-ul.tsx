
import { Icon } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=thin list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM80 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM176 88c-4.4 0-8 3.6-8 8s3.6 8 8 8l320 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L176 88zm0 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l320 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320 0zm0 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l320 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320 0z" />
    </Icon>
);

export default ListUl;