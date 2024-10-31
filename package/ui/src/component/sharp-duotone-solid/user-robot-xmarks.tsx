
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-robot-xmarks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot-xmarks?s=sharp-duotone-solid user-robot-xmarks}
 * @preview ![user-robot-xmarks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-robot-xmarks.svg)
 */
const UserRobotXmarks: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 128l0 128 48 0 0-128-48 0zM144 448l0 16 0 48 32 0 0-48 0-16-32 0zM208 0l0 16 0 48 32 0 0-48 0-16L208 0zm0 448l0 16 0 48 32 0 0-48 0-16-32 0zm64 0l0 16 0 48 32 0 0-48 0-16-32 0zm96-320l0 128 48 0 0-128-48 0z" />
        <path d="M80 64l288 0 0 256L80 320 80 64zm96 176l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm96 32l0-32-32 0 0 32 32 0zM48 352l352 0 48 160-96 0 0-96L96 416l0 96L0 512 48 352zm80-241l-17 17 8.5 8.5L143 160l-23.5 23.5L111 192l17 17 8.5-8.5L160 177l23.5 23.5L192 209l17-17-8.5-8.5L177 160l23.5-23.5L209 128l-17-17-8.5 8.5L160 143l-23.5-23.5L128 111zm136.5 8.5L256 111l-17 17 8.5 8.5L271 160l-23.5 23.5L239 192l17 17 8.5-8.5L288 177l23.5 23.5L320 209l17-17-8.5-8.5L305 160l23.5-23.5L337 128l-17-17-8.5 8.5L288 143l-23.5-23.5z" />
    </Icon>
);

export default UserRobotXmarks;