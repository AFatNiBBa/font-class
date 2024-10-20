
import { Icon } from "../../index";

/**
 * A component that renders the `genderless` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=sharp-light genderless}
 * @preview ![genderless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/genderless.svg)
 */
const Genderless: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default Genderless;