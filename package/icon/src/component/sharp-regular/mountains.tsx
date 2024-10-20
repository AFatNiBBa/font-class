
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-regular mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 432l0-9.2L256 117.3 464 422.8l0 9.2L48 432zM256 32L227 74.6 0 408l0 24 0 48 48 0 409 0 7 0 48 0 128 0 0-78.3L480 160 412.5 261.9 285 74.6 256 32z" />
    </Icon>
);

export default Mountains;