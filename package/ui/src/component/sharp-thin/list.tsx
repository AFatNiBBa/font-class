
import { Icon } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-thin list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 64 64 0 0-64L32 64zM16 48l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zM176 88l320 0 8 0 0 16-8 0-320 0-8 0 0-16 8 0zm0 160l320 0 8 0 0 16-8 0-320 0-8 0 0-16 8 0zm0 160l320 0 8 0 0 16-8 0-320 0-8 0 0-16 8 0zM96 224l-64 0 0 64 64 0 0-64zM32 208l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0zm0 176l0 64 64 0 0-64-64 0zM16 368l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16z" />
    </Icon>
);

export default List;