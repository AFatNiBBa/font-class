
import { Icon } from "../../index";

/**
 * A component that renders the `hacker-news` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hacker-news?s=brands hacker-news}
 * @preview ![hacker-news](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/hacker-news.svg)
 */
const HackerNews: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z" />
    </Icon>
);

export default HackerNews;