
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=sharp-light chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 32L192 32l0 68c-10.2-2.6-21-4-32-4l0-64 0-32 32 0L608 0l32 0 0 32 0 352 0 32-32 0-32 0-16 0-160 0-16 0-59.4 0L315 384l69 0 0-80 0-16 16 0 160 0 16 0 0 16 0 80 32 0 0-352zM544 384l0-64-128 0 0 64 128 0zM224 224A64 64 0 1 0 96 224a64 64 0 1 0 128 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM43 480l234 0-28.8-96L71.8 384 43 480zm5-128l224 0 38.4 128 9.6 32-33.4 0L33.4 512 0 512l9.6-32L48 352z" />
    </Icon>
);

export default ChalkboardUser;