
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=thin circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-400c-7.2 0-14.2 2.9-19.3 8L137 219.7c-5.7 5.7-9 13.5-9 21.7c0 16.9 13.7 30.6 30.6 30.6l49.4 0 0 88c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-88 49.4 0c16.9 0 30.6-13.7 30.6-30.6c0-8.1-3.2-15.9-9-21.7L275.3 120c-5.1-5.1-12.1-8-19.3-8zm-8 19.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3L363.7 231c2.7 2.7 4.3 6.5 4.3 10.3c0 8.1-6.6 14.6-14.6 14.6L296 256c-4.4 0-8 3.6-8 8l0 96c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-96c0-4.4-3.6-8-8-8l-57.4 0c-8.1 0-14.6-6.5-14.6-14.6c0-3.9 1.5-7.6 4.3-10.3L248 131.3z" />
    </Icon>
);

export default CircleUp;