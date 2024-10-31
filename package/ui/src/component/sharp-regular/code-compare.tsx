
import { Icon } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=sharp-regular code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416l96-96 32 0 0 72 16 0c39.8 0 72-32.2 72-72l0-160-8 0-48 0 0-48 0-64 0-48 48 0 64 0 48 0 0 48 0 64 0 48-48 0-8 0 0 160c0 66.3-53.7 120-120 120l-16 0 0 72-32 0-96-96zM400 48l0 64 64 0 0-64-64 0zM320 96l-96 96-32 0 0-72-16 0c-39.8 0-72 32.2-72 72l0 160 8 0 48 0 0 48 0 64 0 48-48 0-64 0L0 512l0-48 0-64 0-48 48 0 8 0 0-160c0-66.3 53.7-120 120-120l16 0 0-72 32 0 96 96zM48 400l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default CodeCompare;