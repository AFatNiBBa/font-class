
import { Icon } from "../../index";

/**
 * A component that renders the `align-justify` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=sharp-solid align-justify}
 * @preview ![align-justify](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/align-justify.svg)
 */
const AlignJustify: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 96l448 0 0-64zm0 256L0 288l0 64 448 0 0-64zM0 160l0 64 448 0 0-64L0 160zM448 416L0 416l0 64 448 0 0-64z" />
    </Icon>
);

export default AlignJustify;