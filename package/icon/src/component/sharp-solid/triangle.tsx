
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-solid triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480L256 32 512 480H0z" />
    </Icon>
);

export default Triangle;