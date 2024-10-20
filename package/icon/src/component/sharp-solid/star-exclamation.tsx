
import { Icon } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-solid star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M374.6 164L288.1 0 201.5 164 18.9 195.6 148.1 328.5 121.7 512l166.4-81.8L454.4 512 428 328.5 557.2 195.6 374.6 164zM312 160l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0zM264 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default StarExclamation;