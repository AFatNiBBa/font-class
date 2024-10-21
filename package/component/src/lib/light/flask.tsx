
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=light flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 196.8L288 32 160 32l0 164.8c0 17.8-4.9 35.2-14.2 50.3L100.9 320l246.2 0-44.8-72.9C292.9 232 288 214.6 288 196.8zM128 32l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0L288 0l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 164.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4L69.4 512C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5L128 32zM37.5 423c-3.6 5.9-5.5 12.7-5.5 19.6C32 463.3 48.7 480 69.4 480l309.2 0c20.7 0 37.4-16.7 37.4-37.4c0-6.9-1.9-13.7-5.5-19.6l-43.7-71L81.2 352 37.5 423z" />
    </Icon>
);

export default Flask;