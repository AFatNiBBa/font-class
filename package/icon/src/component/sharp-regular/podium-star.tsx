
import { Icon } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=sharp-regular podium-star}
 * @preview ![podium-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/podium-star.svg)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 0L176 0l0 24-8 0c-48.6 0-88 39.4-88 88l0 32-56 0L0 144l0 48 24 0 400 0 24 0 0-48-24 0-296 0 0-32c0-22.1 17.9-40 40-40l8 0 0 24 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48zM47.3 224L80 512l288 0 32.7-288-48.3 0L325.1 464l-202.3 0L95.6 224l-48.3 0zm201.6 85.8L224 256l-24.8 53.8-58.9 7 43.5 40.2-11.6 58.1 51.7-29 51.7 29-11.6-58.1 43.5-40.2-58.9-7z" />
    </Icon>
);

export default PodiumStar;