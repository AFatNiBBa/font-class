
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=thin tag}
 * @preview ![tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tag.svg)
 */
const Tag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 229.5c0 12.7 5.1 24.9 14.1 33.9l176 176c18.7 18.7 49.1 18.7 67.9 0L407.4 305.9c18.7-18.7 18.7-49.1 0-67.9l-176-176c-9-9-21.2-14.1-33.9-14.1L48 48C30.3 48 16 62.3 16 80l0 149.5zm-16 0L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l176 176c25 25 25 65.5 0 90.5L285.3 450.7c-25 25-65.5 25-90.5 0l-176-176C6.7 262.7 0 246.5 0 229.5zM112 104a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Tag;