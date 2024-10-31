
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=duotone octagon-plus}
 * @preview ![octagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/octagon-plus.svg)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 191.5l0 129c0 19.1 7.6 37.4 21.1 50.9L140.6 490.8c13.5 13.5 31.8 21.1 50.9 21.1l129 0c19.1 0 37.4-7.6 50.9-21.1L490.8 371.4c13.5-13.5 21.1-31.8 21.1-50.9l0-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2C357.9 7.7 339.6 .1 320.5 .1l-129 0c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6C7.7 154.1 .1 172.4 .1 191.5zM144 256c0-13.3 10.7-24 24-24c21.3 0 42.7 0 64 0c0-21.3 0-42.7 0-64c0-13.3 10.7-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 1.2 .4 2.4 .4 2.4c.1 1.2 .1 1.2 .1 2.5c0 21.3 0 42.7 0 64l64 0c13.4 .1 24 10.8 24 24c0 13.3-10.7 24-24 24c-21.3 0-42.7 0-64 0c0 21.3 0 42.7 0 64.2c0 .7 0 1.5-.1 2.3s-.2 1.6-.4 2.4c-.3 1.6-.8 3.1-1.4 4.5c-1.2 2.9-3 5.5-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24c0-21.3 0-42.7 0-64c-21.3 0-42.7 0-64 0c-13.3 0-24-10.7-24-24z" />
        <path d="M232 280l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0z" />
    </Icon>
);

export default OctagonPlus;