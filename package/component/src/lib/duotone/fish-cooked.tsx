
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-cooked` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-cooked?s=duotone fish-cooked}
 * @preview ![fish-cooked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fish-cooked.svg)
 */
const FishCooked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.5 131.9L30.5 252.1c.6 2.5 .6 5.2 0 7.8L.5 380.1c-1.7 6.7 1.1 13.7 6.9 17.4s13.3 3.3 18.7-1.1l65.1-52.9c6.7-5.5 16.5-4.6 22.5 1.7C164.1 398.2 245.2 448 320 448c120 0 256-128 256-192s-136-192-256-192c-72.6 0-151.1 46.9-201.8 98.1c-5.6 5.7-14.5 6.8-21.1 2.2l-72-49.5c-5.5-3.8-12.7-3.8-18.2 0s-8 10.6-6.4 17zM224 224c0-4.1 1.6-8.2 4.7-11.3c21.3-21.3 42.7-42.7 64-64c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7c6.2 6.2 6.2 16.4 0 22.6c-21.3 21.3-42.7 42.7-64 64c-6.2 6.2-16.4 6.2-22.6 0c-3.1-3.1-4.7-7.2-4.7-11.3zm20.7 100.7c53.3-53.3 106.7-106.7 160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6c-53.3 53.3-106.7 106.7-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm112 16c21.3-21.3 42.7-42.7 64-64c6.2-6.2 16.4-6.2 22.6 0c3.1 3.1 4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3l-64 64c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-6.2-6.2-6.2-16.4 0-22.6z" />
        <path d="M315.3 148.7c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0zm112 16c6.2 6.2 6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0zm16 112c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default FishCooked;