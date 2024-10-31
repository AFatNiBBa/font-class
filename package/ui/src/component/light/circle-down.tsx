
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=light circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm0-112c-9.2 0-18-3.5-24.7-9.7l-91-84c-7.8-7.2-12.3-17.4-12.3-28.1c0-21.1 17.1-38.3 38.3-38.3l25.7 0 0-80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 80 25.7 0c21.1 0 38.3 17.1 38.3 38.3c0 10.7-4.5 20.9-12.3 28.1l-91 84c-6.7 6.2-15.6 9.7-24.7 9.7zm-3-33.2c.8 .8 1.9 1.2 3 1.2s2.2-.4 3-1.2l91-84c1.3-1.2 2-2.9 2-4.6c0-3.5-2.8-6.3-6.3-6.3L304 272c-8.8 0-16-7.2-16-16l0-96c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 96c0 8.8-7.2 16-16 16l-41.7 0c-3.5 0-6.3 2.8-6.3 6.3c0 1.7 .7 3.4 2 4.6l91 84z" />
    </Icon>
);

export default CircleDown;