
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=thin flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M313.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L304 16l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L304 0 288 0 160 0 144 0 120 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 0 180.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L313.5 230.4zM160 16l128 0 0 180.8c0 14.8 4.1 29.3 11.9 41.9c.2 .3 .4 .6 .6 .8L357.2 320 90.8 320l56.8-80.4c.2-.3 .4-.6 .6-.8c7.8-12.6 11.9-27.1 11.9-41.9L160 16zM424.3 415c5 8.3 7.7 17.9 7.7 27.6c0 29.5-23.9 53.4-53.4 53.4L69.4 496C39.9 496 16 472.1 16 442.6c0-9.7 2.7-19.3 7.7-27.6l55.8-79 .5 0 288 0 .5 0 55.8 79z" />
    </Icon>
);

export default Flask;