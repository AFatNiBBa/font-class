
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=sharp-solid thumbs-up}
 * @preview ![thumbs-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/thumbs-up.svg)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 67.7L240 32l96 0 0 35.7c0 38.1-9 75.1-25.8 108.3L464 176l48 0 0 96-16 0 0 80-24 0 0 72-24 0 0 56-48 0-120 0-14.5 0-12.1-8.1-72-48L160 409.7l0-25.7 0-64 0-96 0-23.1 18-14.4 7.9-6.4c34.2-27.3 54-68.7 54-112.4zM128 192l0 288L0 480 0 192l128 0z" />
    </Icon>
);

export default ThumbsUp;