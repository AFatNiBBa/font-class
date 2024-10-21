
import { Icon } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-thin user-tag}
 * @preview ![user-tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-tag.svg)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM75.8 320L320 320l0-16L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16-3.4-11.1-24.2-24.2L426.3 496 21.7 496 75.8 320zM352 128A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM628.7 372.7L480 224l-96 0-32 32 0 96L500.7 500.7 512 512l11.3-11.3L628.7 395.3 640 384l-11.3-11.3zM473.4 240l144 144L512 489.4l-144-144 0-82.7L390.6 240l82.7 0zM440 296a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default UserTag;