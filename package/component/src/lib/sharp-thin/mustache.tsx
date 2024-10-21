
import { Icon } from "../../index";

/**
 * A component that renders the `mustache` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mustache?s=sharp-thin mustache}
 * @preview ![mustache](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mustache.svg)
 */
const Mustache: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M189.1 112l2.9 0 80 0 2.9 0 2.2 1.9L320 149.6l42.9-35.7 2.2-1.9 2.9 0 80 0 2.9 0 2.2 1.9 91.8 76.5L628.2 145l11.8-6.5 0 13.5 0 51.7c0 101.3-80 183.9-180.3 188.1l0 .2-8 0c-45.6 0-89.7-16.6-124-46.6l-7.8-6.8-7.8 6.8c-34.3 30-78.4 46.6-124 46.6l-8 0 0-.2C80 387.6 0 305 0 203.7L0 152l0-13.5L11.8 145l83.2 45.4 91.8-76.5 2.2-1.9zm-.8 264c41.7 0 82-15.1 113.4-42.6l13-11.4 5.3-4.6 5.3 4.6 13 11.4C369.7 360.9 410 376 451.7 376C546.9 376 624 298.9 624 203.7l0-38.3L547.8 207l-4.8 2.6-4.2-3.5L445.1 128l-74.2 0-45.8 38.1-5.1 4.3-5.1-4.3L269.1 128l-74.2 0-93.8 78.1-4.2 3.5L92.2 207 16 165.5l0 38.3C16 298.9 93.1 376 188.3 376z" />
    </Icon>
);

export default Mustache;