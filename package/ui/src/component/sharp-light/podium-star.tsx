
import { Icon } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=sharp-light podium-star}
 * @preview ![podium-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/podium-star.svg)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0-32zM176 96l32 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L208 0 176 0l0 32-8 0c-44.2 0-80 35.8-80 80l0 48-72 0L0 160l0 32 16 0 416 0 16 0 0-32-16 0-312 0 0-48c0-26.5 21.5-48 48-48l8 0 0 32zM47.3 224L80 512l288 0 32.7-288-32.2 0L339.4 480l-230.9 0L79.5 224l-32.2 0zm191.3 25.3L224 217.8l-14.5 31.5-18.8 40.8L146 295.4l-34.4 4.1L137.1 323l33 30.5-8.8 44.1-6.8 34 30.3-16.9L224 392.7l39.2 21.9 30.3 16.9-6.8-34L278 353.5l33-30.5 25.5-23.5L302 295.4l-44.6-5.3-18.8-40.8zM216 311.6l8-17.4 8 17.4 3.8 8.1 8.9 1.1 19.1 2.3-14.1 13-6.6 6.1 1.7 8.8 3.7 18.8-16.8-9.4-7.8-4.4-7.8 4.4-16.8 9.4 3.7-18.8 1.7-8.8-6.6-6.1-14.1-13 19.1-2.3 8.9-1.1 3.8-8.1z" />
    </Icon>
);

export default PodiumStar;