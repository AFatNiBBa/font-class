
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=duotone octagon-check}
 * @preview ![octagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/octagon-check.svg)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 191.5l0 129c0 19.1 7.6 37.4 21.1 50.9L140.6 490.8c13.5 13.5 31.8 21.1 50.9 21.1l129 0c19.1 0 37.4-7.6 50.9-21.1L490.8 371.4c13.5-13.5 21.1-31.8 21.1-50.9l0-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2C357.9 7.7 339.6 .1 320.5 .1l-129 0c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6C7.7 154.1 .1 172.4 .1 191.5zM136 256c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47L335 175c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c2.3 2.3 4.1 5.1 5.3 7.9c.6 1.4 1 2.9 1.3 4.4c.2 1.1 .4 2.3 .3 2.3c.1 1.2 .1 1.2 .1 2.3c0 1.5-.1 1.9-.1 2.3c-.1 .8-.2 1.5-.3 2.3c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-42.7 42.7-85.3 85.3-128 128c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-21.3-21.3-42.7-42.7-64-64c-4.7-4.7-7-10.8-7-17z" />
        <path d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default OctagonCheck;