
import { Icon } from "../../index";

/**
 * A component that renders the `school` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=sharp-solid school}
 * @preview ![school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/school.svg)
 */
const School: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 512l-256 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96L0 512 0 96l160 0L320 0 480 96l160 0 0 416zM144 192l-64 0 0 96 64 0 0-96zm352 0l0 96 64 0 0-96-64 0zM144 320l-64 0 0 96 64 0 0-96zm352 0l0 96 64 0 0-96-64 0zM408 176a88 88 0 1 0 -176 0 88 88 0 1 0 176 0zm-72-48l0 16 0 16 16 0 16 0 0 32-16 0-32 0-16 0 0-16 0-32 0-16 32 0z" />
    </Icon>
);

export default School;