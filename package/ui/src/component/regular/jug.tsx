
import { Icon } from "../../index";

/**
 * A component that renders the `jug` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=regular jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 77.5c0 17.1-5.5 33.7-15.6 47.5L95.6 234.6C85.5 248.4 80 265 80 282.1l0 5.9 288 0 0-5.9c0-17.1-5.5-33.7-15.6-47.5L271.6 124.9C261.5 111.2 256 94.6 256 77.5L256 48l-64 0 0 29.5zM80 416l0 32c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-32L80 416zM304 48l0 29.5c0 6.8 2.2 13.5 6.2 19l15 20.4C338.3 104 356.2 96 376 96c39.8 0 72 32.2 72 72c0 28.9-17.1 53.9-41.6 65.3c6.3 15.4 9.6 31.9 9.6 48.8L416 448c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-165.9c0-27.3 8.7-53.9 25-75.9L137.8 96.5c4.1-5.5 6.2-12.2 6.2-19L144 48c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 64 0 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm50.7 108.9l25.6 34.8c11.2-2 19.7-11.8 19.7-23.6c0-13.3-10.7-24-24-24c-9.2 0-17.2 5.2-21.3 12.9z" />
    </Icon>
);

export default Jug;