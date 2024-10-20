
import { Icon, generic } from "../../index";

/**
 * A component that renders the `database` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/database?s=sharp-duotone-solid database}
 * @preview ![database](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/database.svg)
 */
const Database: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 80l0 32 0 16 0 16 128 80 192 0 128-80 0-16 0-16 0-32L320 0 128 0 0 80zM0 181.7L0 288l0 16 128 80 192 0 128-80 0-16 0-106.3L329.2 256l-210.4 0L0 181.7zm0 160L0 432l128 80 192 0 128-80 0-90.3L329.2 416l-210.4 0L0 341.7z" />
        <path d="M448 341.7l0-37.7L320 384l-192 0L0 304l0 37.7L118.8 416l210.4 0L448 341.7zm0-160l0-37.7L320 224l-192 0L0 144l0 37.7L118.8 256l210.4 0L448 181.7z" />
    </Icon>
);

export default Database;