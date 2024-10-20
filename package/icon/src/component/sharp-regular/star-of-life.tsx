
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=sharp-regular star-of-life}
 * @preview ![star-of-life](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-of-life.svg)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 75.9L328 48l0-48L280 0 232 0 184 0l0 48 0 27.9 0 55.4-48-27.7L111.9 89.6l-41.6-24-24 41.6-24 41.6-24 41.6 41.6 24L64 228.3 112 256 64 283.7 39.9 297.6l-41.6 24 24 41.6 24 41.6 24 41.6 41.6-24L136 408.4l48-27.7 0 55.4 0 27.9 0 48 48 0 48 0 48 0 0-48 0-27.9 0-55.4 48 27.7 24.1 13.9 41.6 24 24-41.6 24-41.6 24-41.6-41.6-24L448 283.7 400 256l48-27.7 24.1-13.9 41.6-24-24-41.6-24-41.6-24-41.6-41.6 24L376 103.6l-48 27.7 0-55.4zm96.1 55.3l24 41.6L376 214.4 304 256l72 41.6 72.1 41.6-24 41.6L352 339.1l-72-41.6 0 83.1 0 83.3-48 0 0-83.3 0-83.1-72 41.6L87.9 380.8l-24-41.6L136 297.6 208 256l-72-41.6L63.9 172.8l24-41.6L160 172.9l72 41.6 0-83.1L232 48l48 0 0 83.3 0 83.1 72-41.6 72.1-41.6z" />
    </Icon>
);

export default StarOfLife;