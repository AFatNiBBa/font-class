
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-regular chess-bishop}
 * @preview ![chess-bishop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-bishop.svg)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 48l17.2 0c-7.6 7.8-15.6 16.6-23.7 26.2C38.2 116.7 0 178.8 0 250.9c0 44.8 24.6 72.2 48 87.8L48 352l48 0 0-27 0-14.6-13-6.7c-18-9.3-35-24.7-35-52.7c0-55.5 29.8-106.8 62.4-145.9c16-19.2 32.1-34.8 44.2-45.5c1.9-1.7 3.7-3.2 5.3-4.6c1.7 1.4 3.4 3 5.3 4.6c12.1 10.7 28.2 26.3 44.2 45.5c5.3 6.3 10.5 13 15.5 20L159 191l-17 17L176 241.9l17-17 57.8-57.8c12.8 25.9 21.2 54.3 21.2 83.8c0 28-17 43.4-35 52.7l-13 6.7 0 14.6 0 27 48 0 0-13.3c23.4-15.6 48-42.9 48-87.8c0-72.1-38.2-134.2-73.6-176.7c-8-9.6-16-18.4-23.7-26.2L240 48l0-48L216 0 167.8 0s0 0 0 0L152.2 0s0 0 0 0L104 0 80 0l0 48zM69.2 432l181.6 0 16.6 32L52.7 464l16.6-32zM320 464l0-2.7L280 384 40 384 0 461.3 0 464l0 48 48 0 224 0 48 0 0-48z" />
    </Icon>
);

export default ChessBishop;