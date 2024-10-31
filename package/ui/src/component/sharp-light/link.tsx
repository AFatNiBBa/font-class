
import { Icon } from "../../index";

/**
 * A component that renders the `link` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=sharp-light link}
 * @preview ![link](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/link.svg)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.5 256c-50 50-50 131 0 181s131 50 181 0l22.6-22.6-22.6-22.6-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8L195.7 154.1c37.4-37.4 98.1-37.4 135.6 0c35.6 35.6 37.6 92.6 4.7 130.6l-5.3 6.1 24.2 21 5.3-6.1c43.9-50.7 41.2-126.7-6.2-174.1C303.9 81.5 223 81.5 173 131.4L48.5 256zm543.1 0c50-50 50-131 0-181s-131-50-181 0L387.9 97.6l22.6 22.6 22.6-22.6c37.5-37.5 98.3-37.5 135.8 0s37.5 98.3 0 135.8L444.3 357.9c-37.4 37.4-98.1 37.4-135.6 0c-35.6-35.6-37.6-92.6-4.7-130.6l5.3-6.1-24.2-21-5.3 6.1c-43.9 50.7-41.2 126.7 6.2 174.1c49.9 49.9 130.9 49.9 180.8 0L591.5 256z" />
    </Icon>
);

export default Link;