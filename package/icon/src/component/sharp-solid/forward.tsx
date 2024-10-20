
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-solid forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256L256 448l0-384L512 256zM0 448L0 64 224 232l0 48L0 448z" />
    </Icon>
);

export default Forward;