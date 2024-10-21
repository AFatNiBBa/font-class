
import { Icon } from "../../index";

/**
 * A component that renders the `mustache` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mustache?s=light mustache}
 * @preview ![mustache](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mustache.svg)
 */
const Mustache: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M235 112c-31.7 0-62.2 12.6-84.6 35.1c-31.6 31.6-81.9 34.4-116.8 6.5l-7.5-6c-5.1-4.1-12-4.5-17.5-1.6c-1.4 .7-2.7 1.7-3.8 2.8C1.8 151.6 0 155.6 0 160l0 44C0 312.2 87.8 400 196 400c42.4 0 83.7-13.8 117.6-39.2L320 356l6.4 4.8C360.3 386.2 401.6 400 444 400c108.2 0 196-87.8 196-196l0-44c0-4.4-1.8-8.4-4.6-11.3c-1.1-1.2-2.4-2.1-3.8-2.8c-5.5-2.9-12.4-2.5-17.5 1.6l-7.5 6c-34.9 27.9-85.2 25.1-116.8-6.5C467.2 124.6 436.8 112 405 112l-3.3 0c-25.2 0-49.8 7.5-70.8 21.4l-11 7.3-11-7.3c-21-14-45.6-21.4-70.8-21.4l-3.3 0zm373 78.7l0 13.3c0 90.6-73.4 164-164 164c-35.5 0-70-11.5-98.4-32.8l-16-12c-5.7-4.3-13.5-4.3-19.2 0l-16 12C266 356.5 231.5 368 196 368c-90.6 0-164-73.4-164-164l0-13.3c45.7 24.4 103.1 16.8 140.9-21c16.4-16.4 38.8-25.7 62-25.7l3.3 0c18.9 0 37.3 5.6 53 16.1l19.9 13.3c5.4 3.6 12.4 3.6 17.8 0l19.9-13.3c15.7-10.5 34.1-16.1 53-16.1l3.3 0c23.3 0 45.6 9.2 62 25.7c37.8 37.8 95.3 45.4 140.9 21z" />
    </Icon>
);

export default Mustache;