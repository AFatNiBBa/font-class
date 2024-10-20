
import { Icon } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=sharp-solid podium-star}
 * @preview ![podium-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/podium-star.svg)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 0l96 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-96 0 0-24-24 0c-22.1 0-40 17.9-40 40l0 32 296 0 24 0 0 48-24 0L24 192 0 192l0-48 24 0 56 0 0-32c0-48.6 39.4-88 88-88l24 0 0-24zM80 512L48 224l352 0L368 512 80 512zM253.3 335.6L224 272l-29.3 63.6-69.6 8.2 51.4 47.6-13.7 68.7L224 425.9l61.1 34.2-13.7-68.7 51.4-47.6-69.6-8.2z" />
    </Icon>
);

export default PodiumStar;