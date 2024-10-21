
import { Icon } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-light eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M118 373c-39.8-38.3-67.9-83.7-83.2-117c15.3-33.3 43.4-78.6 83.2-117c44.6-42.9 101.5-75 170-75s125.4 32.1 170 75c39.8 38.3 67.9 83.7 83.2 117c-15.3 33.3-43.4 78.6-83.2 117c-44.6 42.9-101.5 75-170 75s-125.4-32.1-170-75zM288 480c158.4 0 258-149.3 288-224C546 181.3 446.4 32 288 32S30 181.3 0 256c30 74.7 129.6 224 288 224zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
    </Icon>
);

export default Eye;