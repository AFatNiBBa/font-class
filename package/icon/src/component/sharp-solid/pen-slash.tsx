
import { Icon } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=sharp-solid pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M409.1 294.9l75.6-75.6-128-128L265 183 48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L409.1 294.9zm-69.1 69.1L196.9 251.1 96 352 64 512l160-32L340.1 363.9zM507.3 196.7L576 128 448 0 379.3 68.7l128 128z" />
    </Icon>
);

export default PenSlash;