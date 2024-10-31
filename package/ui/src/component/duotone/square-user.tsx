
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=duotone square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM81.1 416l285.7 0c-7.8-54.3-54.4-96-110.9-96l-64 0c-56.4 0-103.1 41.7-110.9 96zM152 200c0 39.8 32.2 72 72 72c19.9 0 37.9-8.1 50.9-21.1c6.5-6.5 11.8-14.3 15.4-22.9c1.8-4.3 3.2-8.8 4.2-13.5c.5-2.3 .8-4.7 1.1-7.1c.1-1.2 .2-2.4 .3-3.6c.1-1.2 .1-2.4 .1-3.7c0-1.4 0-2.6-.1-3.8s-.2-2.4-.3-3.7c-.2-2.4-.6-4.8-1.1-7.2c-1-4.7-2.4-9.2-4.2-13.5c-3.6-8.6-8.9-16.4-15.4-22.9c-13-13-31-21.1-50.9-21.1c-39.8 0-72 32.2-72 72z" />
        <path d="M152 200a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM81.1 416c7.8-54.3 54.4-96 110.9-96l64 0c56.4 0 103.1 41.7 110.9 96L81.1 416z" />
    </Icon>
);

export default SquareUser;