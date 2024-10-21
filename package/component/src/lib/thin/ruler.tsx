
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=thin ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40.6 401.9c-18.7-18.7-18.7-49.1 0-67.9L85.7 289l52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L97 277.7 149.7 225l52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L161 213.7 213.7 161l52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L225 149.7 277.7 97l52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L289 85.7l45.1-45.1c18.7-18.7 49.1-18.7 67.9 0l69.5 69.5c18.7 18.7 18.7 49.1 0 67.9L177.9 471.4c-18.7 18.7-49.1 18.7-67.9 0L40.6 401.9zm58.2 80.8c25 25 65.5 25 90.5 0L482.7 189.3c25-25 25-65.5 0-90.5L413.3 29.3c-25-25-65.5-25-90.5 0L29.3 322.7c-25 25-25 65.5 0 90.5l69.5 69.5z" />
    </Icon>
);

export default Ruler;