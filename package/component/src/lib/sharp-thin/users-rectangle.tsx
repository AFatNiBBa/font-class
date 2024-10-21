
import { Icon } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=sharp-thin users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 0L0 0 0 8 0 504l0 8 8 0 624 0 8 0 0-8L640 8l0-8-8 0L8 0zm8 496L16 16l608 0 0 480L16 496zM272 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM235.5 304l168.9 0 21.3 64-211.6 0 21.3-64zM416 288l-192 0-26.7 80L192 384l16.9 0 222.3 0 16.9 0-5.3-16L416 288zM144 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm240-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM116.9 328l15.3-56 63.4 0 5.3-16L120 256l-19.6 72L96 344l16.6 0 59 0 5.3-16-60 0zm406.1 0l-60 0 5.3 16 59 0 16.6 0-4.4-16L520 256l-80.9 0 5.3 16 63.4 0 15.3 56z" />
    </Icon>
);

export default UsersRectangle;