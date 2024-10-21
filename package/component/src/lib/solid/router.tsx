
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=solid router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 48c58.8 0 112.5 21.8 153.4 57.9c9.9 8.8 25.1 7.8 33.9-2.1s7.8-25.1-2.1-33.9C487.8 26.4 422.9 0 352 0S216.2 26.4 166.9 69.9c-9.9 8.8-10.9 23.9-2.1 33.9s23.9 10.9 33.9 2.1C239.5 69.8 293.2 48 352 48zm24 200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-136 0 0-72zM96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM276.5 186.7C297.1 170 323.4 160 352 160s54.9 10 75.5 26.7c10.3 8.3 25.4 6.8 33.8-3.5s6.8-25.4-3.5-33.8C428.8 126 392 112 352 112s-76.8 14-105.7 37.4c-10.3 8.3-11.9 23.5-3.5 33.8s23.5 11.9 33.8 3.5z" />
    </Icon>
);

export default Router;