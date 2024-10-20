
import { Icon } from "../../index";

/**
 * A component that renders the `line-columns` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-columns?s=sharp-solid line-columns}
 * @preview ![line-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/line-columns.svg)
 */
const LineColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32L0 32 0 96l224 0 0-64zm0 128L0 160l0 64 224 0 0-64zM0 288l0 64 224 0 0-64L0 288zM224 416L0 416l0 64 224 0 0-64zM288 32l0 64 224 0 0-64L288 32zM512 160l-224 0 0 64 224 0 0-64zM288 288l0 64 224 0 0-64-224 0zM512 416l-224 0 0 64 224 0 0-64z" />
    </Icon>
);

export default LineColumns;