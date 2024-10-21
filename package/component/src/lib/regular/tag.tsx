
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=regular tag}
 * @preview ![tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tag.svg)
 */
const Tag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M197.5 32c17 0 33.3 6.7 45.3 18.7l176 176c25 25 25 65.5 0 90.5L285.3 450.7c-25 25-65.5 25-90.5 0l-176-176C6.7 262.7 0 246.5 0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0zM48 229.5c0 4.2 1.7 8.3 4.7 11.3l176 176c6.2 6.2 16.4 6.2 22.6 0L384.8 283.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-3-3-7.1-4.7-11.3-4.7L48 80l0 149.5zM112 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tag;