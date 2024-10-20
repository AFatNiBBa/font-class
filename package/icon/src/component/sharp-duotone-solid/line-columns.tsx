
import { Icon, generic } from "../../index";

/**
 * A component that renders the `line-columns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-columns?s=sharp-duotone-solid line-columns}
 * @preview ![line-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/line-columns.svg)
 */
const LineColumns: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 32l0 64 224 0 0-64L288 32zm0 128l0 64 224 0 0-64-224 0zm0 128l0 64 224 0 0-64-224 0zm0 128l0 64 224 0 0-64-224 0z" />
        <path d="M224 32L0 32 0 96l224 0 0-64zm0 128L0 160l0 64 224 0 0-64zM0 288l0 64 224 0 0-64L0 288zM224 416L0 416l0 64 224 0 0-64z" />
    </Icon>
);

export default LineColumns;