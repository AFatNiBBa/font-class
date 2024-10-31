
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=solid link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L532.4 392c45.4-28.2 75.6-78.6 75.6-136c0-88.4-71.6-160-160-160l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96 43 96 96c0 43.3-28.6 79.8-67.9 91.8L399.7 288l16.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-97.9 0-81.7-64 19.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-11.3 0-22.3 1.2-32.9 3.4L38.8 5.1zM121 191.4L70.7 151.7C46.6 179.7 32 216.1 32 256c0 88.4 71.6 160 160 160l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96-43-96-96c0-24.9 9.5-47.6 25-64.6z" />
    </Icon>
);

export default LinkSimpleSlash;