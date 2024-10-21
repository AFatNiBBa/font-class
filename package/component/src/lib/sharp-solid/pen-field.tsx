
import { Icon } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=sharp-solid pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 240L288 352l112-16L564.7 171.3l-96-96L304 240zM640 96L544 0 491.3 52.7l96 96L640 96zM32 128L0 128l0 32L0 480l0 32 32 0 512 0 32 0 0-32 0-160 0-32-64 0 0 32 0 128L64 448l0-256 192 0 32 0 0-64-32 0L32 128zM96 288l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default PenField;