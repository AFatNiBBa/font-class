
import { Icon } from "../../index";

/**
 * A component that renders the `star-christmas` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=sharp-solid star-christmas}
 * @preview ![star-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-christmas.svg)
 */
const StarChristmas: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l192 64 64 192 64-192 192-64L320 192 256 0 192 192 0 256zM54.1 88l17 17 48 48 17 17L169.9 136l-17-17L105 71l-17-17L54.1 88zm403.9 0L424 54.1 407 71l-48 48-17 17L376 169.9l17-17 48-48 17-17zM441 407l-48-48-17-17L342.1 376l17 17 48 48 17 17L457.9 424l-17-17zM54.1 424L88 457.9l17-17 48-48 17-17L136 342.1l-17 17L71 407l-17 17z" />
    </Icon>
);

export default StarChristmas;