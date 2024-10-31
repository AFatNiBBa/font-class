
import { Icon } from "../../index";

/**
 * A component that renders the `people-group` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=sharp-light people-group}
 * @preview ![people-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/people-group.svg)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0A56 56 0 1 0 72 88a56 56 0 1 0 112 0zm8 88l-8 0-24 0-88 0-9.1 0-4.7 7.8-48 80-5.3 8.9 6 8.5L64 357l0 75 0 16 16 0 96 0 16 0 0-16 0-87.2L170.5 318 160 304.8 160 416l-64 0 0-208 64 0 0 64.9 8.7-12.4L192 227.2l0-35.2 0-16zM448 432l0 16 16 0 96 0 16 0 0-16 0-75 53.1-75.9 6-8.5-5.3-8.9-48-80-4.7-7.8-9.1 0-88 0-24 0-8 0 0 16 0 35.2 23.3 33.3 8.7 12.4 0-64.9 64 0 0 208-64 0 0-111.2L469.5 318 448 344.8l0 87.2zM43.1 271.3L64 236.4l0 64.8L43.1 271.3zM536 88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-80 0a56 56 0 1 0 112 0A56 56 0 1 0 456 88zM596.9 271.3L576 301.2l0-64.8 20.9 34.9zM288 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM264 192l-8.3 0-4.8 6.8-56 80-6.9 9.8 7.5 9.4L256 373.6l0 90.4 0 16 16 0 96 0 16 0 0-16 0-90.4L444.5 298l7.5-9.4-6.9-9.8-56-80-4.8-6.8-8.3 0-112 0zm-8 55.3l0 75.1-28-35 28-40zM288 448l0-224 64 0 0 224-64 0zm96-125.6l0-75.1 28 40-28 35z" />
    </Icon>
);

export default PeopleGroup;