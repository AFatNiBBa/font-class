
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-solid backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L256 448l0-384L0 256zM512 448l0-384L288 232l0 48L512 448z" />
    </Icon>
);

export default Backward;